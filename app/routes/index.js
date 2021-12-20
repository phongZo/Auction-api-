var express = require('express');
var router = express.Router();


var HomeController = require('../controller/home.controller');
var authMiddleware = require('../middlewares/auth.middleware');

router.get('/', HomeController.get_list);

router.use('/product',require('./product.route'));

router.use('/auction',require('./auction.route'));

router.use('/user',require('./user.route'));

router.use('/auth',require('./auth.route'));

router.use('/cart',require('./cart.route'));

router.use('/payment',require('./payment.route'));

router.use('/bill',require('./bill.route'));

// router.use('/file',require('./file.route'));

router.use('/web',require('./web.route'));

router.use('/category',require('./category.route'));

router.use('/bill',require('./bill.route'));

//router.use('/checkout',require('./checkout.route'));

module.exports = router;
