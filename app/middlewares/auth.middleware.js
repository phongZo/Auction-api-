var UserModel = require('../models/user.model')
var jwt = require('jsonwebtoken');
var cookie = require('cookie');

module.exports.requireAuth = function(req,res,next){
    try{      
        var token = req.cookies.token;
        console.log(token);
        if(token == null){
            //res.redirect('/login');

            res.json("Login");
            // res.redirect('http://localhost:4200/login/');            
            return;
        }       
        else{
            var idUser = jwt.verify(token, 'mk');
            UserModel.findOneById(idUser.id,function(respnse){
                if(respnse != null)
                {
                    // req.data = respnse;
                    if (!req.session.user){
                        req.session.user = respnse; 
                    }
                    return;
                }   
                             
                else {
                    res.json("Khong co account")
                    return;
                }
            })
        }        
        
    }catch(error){
        res.status(500).json("Token khong hop le");        
    }   
}


module.exports.checkAdmin = function(req,res,next){
    var roleid = req.session.user.roleid;
    if(roleid == 1) {
        console.log("Quyen admin");
        next();
    }
    else res.json('NOT PERMISSION');
}