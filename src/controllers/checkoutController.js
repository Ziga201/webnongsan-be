const Checkout = require('../models/checkoutModel');

const createCheckout = async (req, res) => {
    try {
        const checkout = new Checkout({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            total: req.body.total,
            product: req.body.product,
            orderdate: req.body.orderdate,
            confirm: req.body.confirm,
        });
        const checkoutData = await checkout.save();

        res.status(200).send({ success: true, msg: 'Checkout Data', data: checkoutData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const getCheckouts = async (req, res) => {
    try {
        const checkouts = await Checkout.find({});
        res.status(200).send({ success: true, msg: 'checkout Data', data: checkouts });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const deleteCheckout = async (req, res) => {
    try {
        const id = req.params.id;

        await Checkout.deleteOne({ _id: id });
        res.status(200).send({ success: true, msg: 'Xoá đơn hàng thành công' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    createCheckout,
    getCheckouts,
    deleteCheckout,
};
