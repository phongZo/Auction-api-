var UserModel = require('../models/user.model');
var md5 = require('md5');
var jwt = require('jsonwebtoken');
const session = require('express-session');

exports.login = function(req,res){
    res.send('login rồi nhé');
}

exports.postlogin = function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    UserModel.findOneByEmail(email,function(respnse){
        if(respnse == null){
            res.send(
                    'User does not exist'
            );
            return;
        }
        var hasedPassword = md5(password);
        if(respnse.password != hasedPassword){
            res.send(
                'WRONG PASS');
            return;
        }
        var token = jwt.sign({
            id : respnse.id
        }, 'mk');
        res.cookie('token',token,{ maxAge: 24*60*60*1000*15, httpOnly: true });
        if(!req.session.user){
            req.session.user = respnse
        }
        if(respnse.roleid == 1){
            res.send('admin');
            return;
        }
        else{
            res.send('user');
            return;
        }

        
        // SessionModel.findOneById(req.signedCookies.sessionId,function(SessionResult){
        //     if(SessionResult != null){
        //         SessionResult.userid = respnse.id;                
        //         SessionModel.update(SessionResult,function(result){
        //             if(result != null){
        //                 // res.redirect('http://localhost:4200/home');
        //                 res.send(result)
        //             }
        //             else res.send('Khong them user vao session duoc');
        //         })
        //     }
        //     else res.send('Khong tim thay session');
        // })        
    })
}


//email,address,,roleid,first name, lastname, password, confirm password
exports.register=function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    UserModel.findOneByEmail(email,function(respnse){
        if(respnse != null){
            res.send('Account đã tồn tại');
            return;
        }
        else{
            if(password != confirmPassword){
                res.send('Password không trùng khớp');
                return;
            }
            var hasedPassword = md5(password);
            var data = {
                email : email,
                address : req.body.address,
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                password : hasedPassword,
                status : 1,
                roleid : req.body.roleid
            }
            UserModel.insert(data,function(result){
                if(result!=null){
                    var token = jwt.sign({
                        id : result.id
                    }, 'mk');
                    res.cookie('token',token);
                    if(!req.session.user){
                        req.session.user = result
                        res.send('true');
                    }
                    return;
                }
                else{
                    res.send('Tạo account không thành công')
                    return;
                }
            })
        }
    })
}



exports.logout = function(req,res){
    console.log('token:' + req.cookies.token)
    res.clearCookie("token")
    // req.session = null;
    // console.log(req.session.user)
    // res.send('Logout success');
    // //cookies.set('token', {maxAge: 0});
    req.session.destroy(err => {
        if (err) {
            res.send("null");
        }
        res.send("thanh cong")
    });
}
