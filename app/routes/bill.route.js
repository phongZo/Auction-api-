var express = require('express');
var router = express.Router();
var authMiddleware = require('../middlewares/auth.middleware');
var sessionMiddleware = require('../middlewares/session.middleware');
var BillController = require('../controller/bill.controller');


router.get('/list',BillController.get_all);

router.get('/',sessionMiddleware.checkUser,BillController.findOneByUserId);


module.exports = router;