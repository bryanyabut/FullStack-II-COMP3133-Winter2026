const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  address: mongoose.Schema.Types.Mixed,
  borough: String,
  cuisines: String,
  cuisine: String,
  grades: [mongoose.Schema.Types.Mixed],
  name: String,
  city: String,
  restaurant_id: String
}, { collection: 'restaurants' });

module.exports = mongoose.model('Restaurant', RestaurantSchema);
