var express = require('express');
var router = express.Router();

var PaymentController = require('../controller/payment.controller');
var authMiddleware = require('../middlewares/auth.middleware');
var sessionMiddleware = require('../middlewares/session.middleware');
var upFileMiddleware = require('../middlewares/upLoadFile.middleware');
//,authMiddleware.requireAuth

router.get('/',PaymentController.move_to_checkout);

router.post('/pay/visa', PaymentController.move_to_visa);

router.post('/pay/paypal',sessionMiddleware.checkUser, PaymentController.move_to_paypal);

router.get('/success', PaymentController.check_success);

module.exports = router;