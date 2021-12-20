var Bill = require('../models/bill.model')

exports.get_all = function(req,res){
    Bill.findAll(function(result){
        res.send({Bill:result})
    })
}


exports.findOneByUserId = function(req,res){
    Bill.finOneById(function(result){
        res.send({Bill:result})
    })
}
