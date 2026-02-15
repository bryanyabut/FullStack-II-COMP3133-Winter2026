const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 8081;
const MONGO_URI = process.env.MONGO_URI || "";

mongoose.connect(MONGO_URI);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});