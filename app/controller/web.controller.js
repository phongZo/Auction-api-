var Web = require('../models/web.model')

exports.get_one_by_id = function(req,res){
    Web.findOneById(id,function(respnse){
        res.send(respnse)
    })
}

exports.get_all = function(req,res){
    Web.findAll(function(respnse){
        res.send(respnse)
    })
}