const express = require('express');
const blog_route = express();

const bodyParser = require('body-parser');
blog_route.use(bodyParser.json());
blog_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

blog_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/blogImages'), function (error, success) {
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

const blogController = require('../controllers/blogController');

blog_route.post('/create-blog', upload.single('image'), blogController.createBlog);

blog_route.get('/get-blogs', blogController.getBlogs);

blog_route.get('/get-blog/:id', blogController.getBlogById);

blog_route.get('/delete-blog/:id', blogController.deleteBlog);

blog_route.post('/update-blog', upload.single('image'), blogController.updateBlog);

module.exports = blog_route;
