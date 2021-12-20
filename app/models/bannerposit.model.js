const db = require('../configs/database');
const BannerPosit = function(bannerPosit){
    this.id = id;
    this.name = name;
    this.width = width;
    this.height = height;
    this.min_price = min_price;
    this.thumbnail = thumbnail;
    this.timeLive = timeLive;
    this.auction_status = auction_status;
    this.web_id = web_id;
    this.last_auction_date = last_auction_date;
    this.auction_date = auction_date;
    this.price_step = price_step;
    this.auction_end_date = auction_end_date;
}

BannerPosit.findAllByString = function(data,result){
    var sql = "SELECT * FROM bannerposit WHERE match(name) against(?)";
    db.query(sql,data,function(err,bannerPosit){
        if(err) result(null);
        else result(bannerPosit);
    })
}

BannerPosit.findAllByName = function(data,result){
    var sql = "SELECT * FROM bannerposit WHERE name = ?";
    db.query(sql,data,function(err,bannerPosit){
        if(err) result(null);
        else result(bannerPosit);
    })
}


BannerPosit.findAll = function(result){
    db.query("SELECT * FROM bannerposit",function(err,bannerPosit){
        if(err) result(null);
        else result(bannerPosit);
    });
}

BannerPosit.insert = function(data,result){
    db.query("INSERT INTO bannerposit SET ?",data,function(err,bannerPosit){
        if(err) result(null);
        else result({id: bannerPosit.insertId, ...data});
    })
}

BannerPosit.findOneById = function(id,result){
    var sql = "SELECT * FROM bannerposit WHERE id = ?";
    db.query(sql, id, function (err, bannerPosit) {
    if (err || bannerPosit.length ==0) result(null);
    else result(bannerPosit[0]);
});
}
BannerPosit.checkExisted = function(name,web_id,result){
    var sql = "SELECT * FROM bannerposit WHERE name = ? AND web_id = ?";
    db.query(sql,name,web_id,function(err,bannerPosit){
        if(err) result(null);
        else result("Chưa tồn tại BannerPosit này");
    })
}

BannerPosit.changeStatus = function(id,result){
    var sql = "UPDATE FROM bannerposit WHERE id = ?";
    db.query(sql,id,function(err,bannerPosit){
        if(err) result(null);
        else result("ĐÃ XÓA DỮ LIỆU bannerposit CÓ ID = "+ id+"THÀNH CÔNG!!!");
    })
}

BannerPosit.delete = function(id,result){
    var sql = "DELETE FROM bannerposit WHERE id = ?";
    db.query(sql,id,function(err,bannerPosit){
        if(err) result(null);
        else result("ĐÃ XÓA DỮ LIỆU bannerposit CÓ ID = "+ id+"THÀNH CÔNG!!!");
    })
}

BannerPosit.findByCategoryId = function(id,result){
    var sql = "SELECT * FROM bannerposit WHERE web_id = ?";
    db.query(sql,id,function(err,bannerPosit){
        if(err) result(null);
        else result(bannerPosit);
    })
}


BannerPosit.update = function(data,result){
    var sql = "UPDATE bannerposit SET name = ?,width = ?,height = ?,min_price = ?,thumbnail = ?,web_id = ?,timeLive = ?,auction_status = ?"
    + ",last_auction_date = ?,auction_date = ?,price_step = ?,auction_end_date= ? WHERE id = ?";
    var values  = [data.name,data.width,data.height,data.min_price,data.thumbnail,data.web_id,data.timeLive,data.auction_status,data.last_auction_date,data.auction_date
        ,data.price_step,data.auction_end_date,data.id]
    db.query(sql,values,function(err,bannerPosit){
        if(err) result(null);
        else result("Update thanh cong");
    })
}

module.exports = BannerPosit