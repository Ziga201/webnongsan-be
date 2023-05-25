const express = require('express');
const staff_route = express();

const bodyParser = require('body-parser');
staff_route.use(bodyParser.json());
staff_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

staff_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/staffImages'), function (error, success) {
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

const staffController = require('../controllers/staffController');

staff_route.post('/create-staff', upload.single('image'), staffController.createStaff);

staff_route.get('/get-staffs', staffController.getStaffs);

staff_route.get('/delete-staff/:id', staffController.deleteStaff);

staff_route.post('/update-staff', upload.single('image'), staffController.updateStaff);

module.exports = staff_route;
