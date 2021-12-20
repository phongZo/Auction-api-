const db = require('../configs/database');
const Cart = function(cart){
    this.id = id;
    this.userid = userid;
    this.bannerposit_id = bannerposit_id;
    this.totalprice = totalprice;
}
Cart.insetWithId = function(bannerposit_id,userid,totalprice,result){
    var sql = 'INSERT INTO cart (bannerposit_id,totalprice,userid) VALUES ?';
    var values = [
        [bannerposit_id,totalprice,userid]
    ];
    db.query(sql,[values],function(err,cart){
        if(err) result(null);
        else result({CartId: cart.insertId});
    })
}

Cart.findOneByUserId = function(userid,result){
    var sql = 'SELECT * FROM cart WHERE userid = ?';
    db.query(sql,userid,function(err,cart){
        if(err) result(null);
        else result(cart);
    })
}


Cart.delete = function(id,result){
    var sql = "DELETE FROM cart WHERE id = ?";
    db.query(sql,id,function(err){
        if(err) result(null);
        else result('Đã xóa thành công cart có id = '+id)
    })
}

Cart.deleteByUserId = function(id,result){
    var sql = "DELETE FROM cart WHERE userid = ?";
    db.query(sql,id,function(err){
        if(err) result(null);
        else result('Đã xóa thành công cart có id = '+id)
    })
}

Cart.findOneByUserIdandPositId = function(userid,bannerposit_id,result){
    var sql = "SELECT * FROM cart WHERE userid = ? and bannerposit_id = ?"
    db.query(sql,[userid,bannerposit_id],function(err,cart){
        if(err) result(null);
        else result(cart[0]);
    })
}

// Cart.update = function(id,quantity,result){
//     var sql = "UPDATE cart SET quantity = ? WHERE id = ? ";
//     db.query(sql,[quantity,id],function(err,cart){
//         if(err) result(null);
//         else result("UPDATED quantity in cart have id = "+id);
//     })
// }

module.exports = Cart