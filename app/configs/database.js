var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2306',
    database: 'doanec'
  })
conn.connect(function(err,conn) {
    if (err) throw err;
    else
      console.log("Connected!!!")
  });  
module.exports = conn;