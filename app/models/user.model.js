const db = require('../configs/database');
const User = function(user){
    this.id = id;
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.status = status;
    this.roleid = roleid;
}


User.findOneByEmail = function(email,result){
    db.query("SELECT * FROM user WHERE email = ?",email,function(err,user){
        if(err) result(null);
        else result(user[0]);
    });
}

User.delete = function(id,result){
    db.query("DELETE FROM user WHERE id = ?",id,function(err,user){
        if(err) result(null);
        else result('success');
    });
}

User.findOneById = function(id,result){
    db.query("SELECT * FROM user WHERE id = ?",id,function(err,user){
        if(err) result(null);
        else result(user[0]);
    });
}


User.findAll = function(result){
    db.query("SELECT * FROM user",function(err,user){
        if(err) result(null);
        else result(user);
    });
}

User.insert = function(data,result){
    db.query("INSERT INTO user SET ?",data,function(err,user){
        if(err) result(null);
        else result('success');
    });
}

User.updatePassword = function(data,result){
    db.query("UPDATE user SET password = ? WHERE id = ?",[data.password,data.id],function(err,user){
        if(err) result(null);
        else result('Changed');
    });
}

module.exports = User