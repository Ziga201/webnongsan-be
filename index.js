const express = require('express');
const app = express();
const cors = require('cors');

app.use(
    cors({
        origin: '*',
    }),
);

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/doan-backend');

const post_route = require('./src/routes/postRoute');
app.use('/api', post_route);

const blog_route = require('./src/routes/blogRoute');
app.use('/api', blog_route);

const account_route = require('./src/routes/accountRoute');
app.use('/api', account_route);

const checkout_route = require('./src/routes/checkoutRoute');
app.use('/api', checkout_route);

const staff_route = require('./src/routes/staffRoute');
app.use('/api', staff_route);

const message_route = require('./src/routes/messageRoute');
app.use('/api', message_route);

app.listen(8000, function () {
    console.log('Server is running');
});
