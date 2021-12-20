var express = require('express');
var router = express.Router();

var CategoryController = require('../controller/category.controller');
var authMiddleware = require('../middlewares/auth.middleware');
var sessionMiddleware = require('../middlewares/session.middleware');

router.get('/',sessionMiddleware.checkUser,authMiddleware.checkAdmin, CategoryController.get_all);

router.get('/:id', CategoryController.findAllBannerPosit);


module.exports = router;