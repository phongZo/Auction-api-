var express = require('express');
var router = express.Router();
var AuctionController = require('../controller/auction.controller');
var authMiddleware = require('../middlewares/auth.middleware');
var sessionMiddleware = require('../middlewares/session.middleware');

router.get('/list',sessionMiddleware.checkUser,authMiddleware.checkAdmin ,AuctionController.get_all);

router.post('/',sessionMiddleware.checkUser, AuctionController.makeAuction);

module.exports = router;