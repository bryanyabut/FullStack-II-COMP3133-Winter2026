require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Restaurant = require('../models/Restaurant');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/restaurants';
const filePath = process.argv[2] || path.join(__dirname, 'restaurants.json');

async function run() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB for seeding');

  if (!fs.existsSync(filePath)) {
    console.error('Seed file not found:', filePath);
    process.exit(1);
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const docs = JSON.parse(raw);

  await Restaurant.deleteMany({});
  await Restaurant.insertMany(docs);
  console.log('Inserted', docs.length, 'documents');
  await mongoose.disconnect();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
