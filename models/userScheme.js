const mongoose = require("mongoose");
const validator = require("validator");

// Define the user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return validator.isEmail(value);
            },
            message: 'Invalid email'
        }
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
        minLength: 11,
        maxLength:11
    }
});

// Define the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
