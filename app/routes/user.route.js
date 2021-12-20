var express = require('express');
var router = express.Router();

var HomeController = require('../controller/home.controller');
var authMiddleware = require('../middlewares/auth.middleware');
var sessionMiddleware = require('../middlewares/session.middleware');
var UserController = require('../controller/user.controller');


//api/user/list
router.get('/list',sessionMiddleware.checkUser,authMiddleware.checkAdmin,UserController.get_all);

router.get('/',sessionMiddleware.checkUser,UserController.get_one_by_id);

router.get('/delete',UserController.deleteUser);

router.post('/changePassword',sessionMiddleware.checkUser,UserController.changePass);

//,sessionMiddleware.checkUser,authMiddleware.checkAdmin

module.exports = router;
