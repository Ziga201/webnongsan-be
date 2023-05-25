const express = require('express');
const checkout_route = express();

const bodyParser = require('body-parser');
checkout_route.use(bodyParser.json());
checkout_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

checkout_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/checkoutImages'), function (error, success) {
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

const checkoutController = require('../controllers/checkoutController');

checkout_route.post('/create-checkout', upload.single('image'), checkoutController.createCheckout);

checkout_route.get('/get-checkouts', checkoutController.getCheckouts);

checkout_route.get('/delete-checkout/:id', checkoutController.deleteCheckout);

// checkout_route.post('/update-checkout', upload.single('image'), checkoutController.updateCheckout);

module.exports = checkout_route;
