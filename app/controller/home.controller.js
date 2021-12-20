var BannerPosit = require('../models/bannerposit.model')


exports.get_list = function(req,res){ 
    BannerPosit.findAll(function(data){
        res.render('items/index',{result:data});
    });
};





