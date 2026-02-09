require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const restaurantsRouter = require('./routes/restaurants');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/restaurants';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.error('MongoDB connection error:', err.message));

app.use('/restaurants', restaurantsRouter);

app.get('/', (req, res) => res.send('Lab3 Restaurant API'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
