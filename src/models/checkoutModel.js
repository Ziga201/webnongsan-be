const mongoose = require('mongoose');

const checkoutChema = mongoose.Schema({
    product: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    total: {
        type: String,
        required: true,
    },
    orderdate: {
        type: String,
        required: true,
    },
    confirm: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Checkout', checkoutChema);
