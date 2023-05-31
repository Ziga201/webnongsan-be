const mongoose = require('mongoose');

const accountChema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    decentralization: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Account', accountChema);
