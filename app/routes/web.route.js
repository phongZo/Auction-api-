var express = require('express');
var router = express.Router();


var authMiddleware = require('../middlewares/auth.middleware');
var sessionMiddleware = require('../middlewares/session.middleware');
var WebController = require('../controller/web.controller');

router.get('/list',WebController.get_all);
//,sessionMiddleware.checkUser,authMiddleware.checkAdmin
module.exports = router;