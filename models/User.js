const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
        trim: true,
        tolowercase: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true,
        tolowercase: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('users', UserSchema);