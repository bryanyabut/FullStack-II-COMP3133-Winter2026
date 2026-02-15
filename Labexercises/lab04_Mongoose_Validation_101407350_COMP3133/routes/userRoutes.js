const express = require("express");
const userSchema = require("../models/users");
const router = express.Router();

//POST: create new user
router.post("/", async (req, res) => {
  try {
    console.log("Trying to save new user:", req.body);

    const newUser = new userSchema(req.body);
    const saved = await newUser.save();

    return res.status(201).json(saved);
  } catch (err) {
    if (err?.name === "ValidationError") {
      const validationErrors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ errors: validationErrors });
    }

    if (err?.code === 11000) {
      return res.status(409).json({
        error: "Duplicate email",
        details: err.keyValue,
      });
    }
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//GET: get all users
router.get("/", async (req, res) => {
  try {
    const users = await userSchema.find();
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
