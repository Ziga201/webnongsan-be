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

// checkout_route.post('/create_payment_url', function (req, res, next) {
//     var ipAddr =
//         req.headers['x-forwarded-for'] ||
//         req.connection.remoteAddress ||
//         req.socket.remoteAddress ||
//         req.connection.socket.remoteAddress;

//     var dateFormat = require('dateformat');

//     var tmnCode = '3FUOYR2F';
//     var secretKey = 'WJBVQWFQQTAFKEDNTZUFZHQOWQNIIVFJ';
//     var vnpUrl = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
//     var returnUrl = 'http://localhost:3000/confirm';

//     var date = new Date();

//     var createDate = dateFormat(date, 'yyyymmddHHmmss');
//     var orderId = dateFormat(date, 'HHmmss');
//     var amount = req.body.amount;
//     var bankCode = req.body.bankCode;

//     // var orderInfo = req.body.orderDescription;
//     // var orderType = req.body.orderType;
//     var locale = req.body.language;
//     if (locale === null || locale === '') {
//         locale = 'vn';
//     }
//     var currCode = 'VND';
//     var vnp_Params = {};
//     vnp_Params['vnp_Version'] = '2.1.0';
//     vnp_Params['vnp_Command'] = 'pay';
//     vnp_Params['vnp_TmnCode'] = tmnCode;
//     // vnp_Params['vnp_Merchant'] = ''
//     vnp_Params['vnp_Locale'] = locale;
//     vnp_Params['vnp_CurrCode'] = currCode;
//     vnp_Params['vnp_TxnRef'] = orderId;
//     vnp_Params['vnp_OrderInfo'] = orderInfo;
//     vnp_Params['vnp_OrderType'] = orderType;
//     vnp_Params['vnp_Amount'] = amount * 100;
//     vnp_Params['vnp_ReturnUrl'] = returnUrl;
//     vnp_Params['vnp_IpAddr'] = ipAddr;
//     vnp_Params['vnp_CreateDate'] = createDate;
//     if (bankCode !== null && bankCode !== '') {
//         vnp_Params['vnp_BankCode'] = bankCode;
//     }

//     vnp_Params = sortObject(vnp_Params);

//     var querystring = require('qs');
//     var signData = querystring.stringify(vnp_Params, { encode: false });
//     var crypto = require('crypto');
//     var hmac = crypto.createHmac('sha512', secretKey);
//     var signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
//     vnp_Params['vnp_SecureHash'] = signed;
//     vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

//     res.redirect(vnpUrl);
// });
// Vui lòng tham khảo thêm tại code demo

module.exports = checkout_route;
