const Bill = require('../models/bill.model');
var CartModel = require('../models/cart.model')
var UserModel = require('../models/user.model')
var Auction = require('../models/auction.model')
var md5 = require('md5');

exports.get_all = function(req,res){
    UserModel.findAll(function(respnse){
        if(respnse == null){
            res.send({
                errors :[
                    'Did not have any user'
                ]
            });
            return;
        }
        res.send({
            result : respnse
        })
    })
}

exports.changePass = function(req,res){
    var currentPassword = req.body.currentPassword;
    var newPassword = req.body.newPassword;
    UserModel.findOneById(req.session.user.id,function(respnse){
        if(respnse != null){
            if(respnse.password != md5(currentPassword)){
                res.send('Sai mật khẩu hiện tại');
            } 
            else{
                respnse.password = md5(newPassword)
                UserModel.updatePassword(respnse,function(result){
                    if(result!=null){
                        res.send('success')
                    }
                    else{
                        res.send('null');
                    }
                })
            }
        }
    })
}

exports.get_one_by_id = function(req,res){
    UserModel.findOneById(req.session.user.id,function(respnse){
        if(respnse == null){
            res.send({
                errors :[
                    'Did not have any user'
                ]
            });
            return;
        }
        res.send({respnse})           
    })
}

exports.deleteUser = function(req,res){
    var userid = req.body.id
    Bill.delete(userid,function(respnse){
        if(respnse != null){
            CartModel.deleteByUserId(userid,function(resultDelete){
                if(resultDelete!=null){
                    Auction.deleteByUserId(userid,function(ketqua){
                        if(ketqua!=null){
                            UserModel.delete(userid,function(respnse){       
                                if(respnse != null){
                                    res.send('thanh cong');
                                    return;
                                }
                                else{
                                    res.send("null")           
                                }
                            })
                        }
                    })                   
                }
            })
        }
    })
    
}
