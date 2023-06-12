const express = require('express');
const message_route = express();

const bodyParser = require('body-parser');
message_route.use(bodyParser.json());
message_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

message_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/messageImages'), function (error, success) {
            if (error) {
                console.log(error);
            }
        });
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, function (error, success) {
            if (error) {
                console.log(error);
            }
        });
    },
});

const upload = multer({ storage: storage });

const messageController = require('../controllers/messageController');

message_route.post('/create-message', upload.single('image'), messageController.createMessage);

message_route.get('/get-messages', messageController.getMessages);

message_route.get('/delete-message/:id', messageController.deleteMessage);

module.exports = message_route;
