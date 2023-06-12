const express = require('express');
const account_route = express();

const bodyParser = require('body-parser');
account_route.use(bodyParser.json());
account_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

account_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/accountImages'), function (error, success) {
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

const accountController = require('../controllers/accountController');

account_route.post('/create-account', upload.single('image'), accountController.createAccount);

account_route.get('/get-accounts', accountController.getAccounts);

account_route.get('/get-account/:id', accountController.getAccountById);

account_route.get('/delete-account/:id', accountController.deleteAccount);

account_route.post('/update-account', upload.single('image'), accountController.updateAccount);

module.exports = account_route;
