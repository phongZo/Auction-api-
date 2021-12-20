const db = require('../configs/database');
const Bill = function(bill){
    this.id = id;
    this.userid = userid;
    this.bannerpositid = bannerpositid;
    this.totalprice = totalprice;
    this.thumbnailuser = thumbnailuser;
}
Bill.findAll = function(result){
    var sql = "SELECT * FROM bill";
    db.query(sql,function(err,bill){
        if(err) result(null);
        else result(bill);
    })
}

Bill.insert = function(data,result){
    db.query("INSERT INTO bill SET ?",data,function(err,bill){
        if(err) result(null);
        else result({id: bill.insertId, ...data});
    })
}

Bill.delete = function(id,result){
    db.query("DELETE FROM bill WHERE userid = ?",id,function(err){
        if(err) result(null);
        else result('success');
    });
}

Bill.finOneById = function(result){
    db.query("SELECT * FROM bill WHERE id=?",req.session.user.id,function(err,bill){
        if(err) result(null);
        else result(bill);
    });
}

module.exports = Bill