const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// GET /restaurants
router.get('/', async (req, res) => {
  try {
    const sortBy = req.query.sortBy;
    if (sortBy) {
      const sortOrder = String(sortBy).toUpperCase() === 'ASC' ? 1 : -1;
      const docs = await Restaurant.find()
        .sort({ restaurant_id: sortOrder })

        .select('cuisines cuisine name city restaurant_id')
        .lean();

      const mapped = docs.map(d => ({
        id: d._id,
        cuisines: d.cuisines || d.cuisine || null,
        name: d.name,
        city: d.city,
        resturant_id: d.restaurant_id
      }));
      return res.json(mapped);
    }

    const docs = await Restaurant.find().lean();
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /restaurants/cuisine/:cuisine - filter by cuisine
router.get('/cuisine/:cuisine', async (req, res) => {
  try {
    const cuisine = req.params.cuisine;
    const docs = await Restaurant.find({ $or: [{ cuisines: cuisine }, { cuisine: cuisine }] }).lean();
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /restaurants/Delicatessen
router.get('/Delicatessen', async (req, res) => {
  try {
    const docs = await Restaurant.find({ $or: [{ cuisines: 'Delicatessen' }, { cuisine: 'Delicatessen' }], city: { $ne: 'Brooklyn' } })
      .select('cuisines cuisine name city -_id')
      .sort({ name: 1 })
      .lean();

    const mapped = docs.map(d => ({ cuisines: d.cuisines || d.cuisine || null, name: d.name, city: d.city }));
    res.json(mapped);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
