var express = require('express');

var router = express.Router();

var AuthController = require('../controller/auth.controller');
var sessionMiddleware = require('../middlewares/session.middleware');

router.get('/logout',sessionMiddleware.checkUser,AuthController.logout);

router.post('/login',AuthController.postlogin);

router.get('/login',sessionMiddleware.checkUser ,AuthController.login);

router.post('/register',AuthController.register);

module.exports = router;