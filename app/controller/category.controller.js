var Website = require('../models/web.model')
var Bannerposit = require('../models/bannerposit.model')

exports.get_all = function(req,res){
    Website.findAll(function(respnse){
        res.send(respnse);
    })
};  




exports.findAllBannerPosit = function(req,res){
    Bannerposit.findByCategoryId(req.params.id,function(respnse){
        Website.findOneById(req.params.id,function(result){
            res.send({category:respnse,web:result});
        })
    })
}