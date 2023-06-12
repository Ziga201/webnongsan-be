const Message = require('../models/messageModel');

const createMessage = async (req, res) => {
    try {
        const message = new Message({
            name: req.body.name,
            email: req.body.email,
            topic: req.body.topic,
            message: req.body.message,
        });
        const messageData = await message.save();

        res.status(200).send({ success: true, msg: 'Message Data', data: messageData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({});
        res.status(200).send({ success: true, msg: 'Message Data', data: messages });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const deleteMessage = async (req, res) => {
    try {
        const id = req.params.id;

        await Message.deleteOne({ _id: id });
        res.status(200).send({ success: true, msg: 'Xoá Message thành công' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    createMessage,
    getMessages,
    deleteMessage,
};
