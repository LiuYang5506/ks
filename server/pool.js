const mysql=require('mysql');

var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'ks',
    connectionLimit:12
});

module.exports=pool;