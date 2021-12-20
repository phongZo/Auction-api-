const db = require('../configs/database');
const Auction = function(auction){
    this.id = id;
    this.userid = userid;
    this.bannerpositid = bannerpositid;
    this.price_bid = price_bid;
}
Auction.findAll = function(result){
    db.query("SELECT * FROM auction",function(err,auction){
        if(err || auction.length ==0) result(null);
        else result(auction);
    });
}

Auction.insert = function(data,result){
    db.query("INSERT INTO auction SET ?",data,function(err,auction){
        if(err) result(null);
        else result({id: auction.insertId, ...data});
    });
}

Auction.findOneById = function(id,result){
    var sql = "SELECT * FROM auction WHERE id = ?";
    db.query(sql, id, function (err, auction) {
        console.log(err,auction);
        if (err || auction.length ==0) result(null);
        else result(auction[0]);
});
}
Auction.deleteByUserId = function(id,result){
    db.query("DELETE FROM auction WHERE userid = ?",id,function(err){
        if(err) result(null);
        else result('success');
    });
}

Auction.get_rank = function(id,result){
    var sql = "SELECT * FROM auction WHERE bannerpositid = ? ORDER BY price_bid DESC";
    db.query(sql, id, function (err, auction) {
        if (err || auction.length ==0) result(null);
        else result(auction);
    });
}

Auction.findOneByPositId = function(id,result){
    var sql = "SELECT * FROM auction WHERE bannerpositid = ?";
    db.query(sql, id, function (err, auction) {
        console.log(err,auction);
        if (err || auction.length ==0) result(null);
        else result(auction[0]);
});
}

Auction.delete = function(id,result){
    var sql = "DELETE FROM auction WHERE id = ?";
    db.query(sql,id,function(err,auction){
        if(err) result(null);
        else result("ĐÃ XÓA DỮ LIỆU auction CÓ ID = "+ id+" THÀNH CÔNG!!!");
    })
}

Auction.updateUserBid = function(data,result){
    var sql = "UPDATE auction SET price_bid = ? WHERE userid = ? AND bannerpositid = ?;"
    var values  = [data.price_bid,data.userid,data.bannerpositid]
    db.query(sql,values,function(err){
        if(err) result(null);
        else result("Update thanh cong");
    })
}



module.exports = Auction