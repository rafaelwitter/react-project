const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userShcema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlenght: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userShcema);

module.exports = User;