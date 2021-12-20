var express = require('express');
const moment = require('moment');
var router = express.Router();
var ProductController = require('../controller/product.controller');
var authMiddleware = require('../middlewares/auth.middleware');
var sessionMiddleware = require('../middlewares/session.middleware');

router.post('/search',ProductController.findAllBySearchString);

router.post('/searchByName',ProductController.findAllByName);

router.get('/',ProductController.get_all);
//sessionMiddleware.checkUser
router.get('/demo',function(req,res){
    res.render('items/createProduct')
});

router.get('/:id', ProductController.get_one_by_id);

router.post('/create',sessionMiddleware.checkUser,authMiddleware.checkAdmin, ProductController.create);

router.post('/createAuction', sessionMiddleware.checkUser,authMiddleware.checkAdmin,ProductController.moveBannerPositToAuction);

//router.put('/edit/:id',ProductController.update);

router.delete('/delete/:id',sessionMiddleware.checkUser,authMiddleware.checkAdmin,ProductController.remove);
  

module.exports = router;