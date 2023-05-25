const mongoose = require('mongoose');

const blogChema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createAt: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Blog', blogChema);
