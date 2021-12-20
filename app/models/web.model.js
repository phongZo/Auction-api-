const db = require('../configs/database');
const Website = function(website){
    this.id = id;
    this.name = name;
    this.shortdescription = shortdescription;
    this.link = link;
}

Website.findAll = function(result){
    var sql = "SELECT * FROM website";
    db.query(sql,function(err,website){
        if(err) result(null);
        else result(website);
    });
}

Website.findOneById = function(id,result){
    var sql = "SELECT * FROM website WHERE id = ?";
    db.query(sql,id,function(err,website){
        if(err) result(null);
        else result(website[0]);
    });
}

module.exports = Website