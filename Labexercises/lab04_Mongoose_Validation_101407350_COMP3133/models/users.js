const mongoose = require('mongoose');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cityRegex = /^[a-zA-Z\s]+$/;
const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
const zipCodeRegex = /^\d{5}(-\d{4})?$/;
const phoneRegex = /^\d-\d{3}-\d{3}-\d{4}$/;

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minlength: [4, 'Username must be at least 4 characters long'],
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function(value) {
            return emailRegex.test(value);
        }
    },
    city: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return cityRegex.test(value);
            },
            message: 'City can only contain letters and spaces'
        }
    },
    webURL: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return urlRegex.test(value);
            },
            message: 'Invalid URL format'
        }
    },
    zipCode: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return zipCodeRegex.test(value);
            },
            message: 'Invalid ZIP code format'
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return phoneRegex.test(value);
            },
            message: 'Phone number must be in the format X-XXX-XXX-XXXX'
        }
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;