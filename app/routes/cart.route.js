var express = require('express');
var router = express.Router();

var CartController = require('../controller/cart.controller');
var authMiddleware = require('../middlewares/auth.middleware');
var sessionMiddleware = require('../middlewares/session.middleware');

//router.get('/:id', CartController.create);

router.get('/:userid',sessionMiddleware.checkUser, CartController.getOneByUserId);

// router.get('/addToCart/:id',function(req,res){
//     res.send('da vao cart');
// })


// router.get('/',authMiddleware.requireAuth, CartController.movetocart);


module.exports = router;
