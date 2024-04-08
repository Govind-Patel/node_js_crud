const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-com');

const mysql = require('mysql');
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"laravel_sync"
});
con.commit((err) => {
    if(err){
        console.warn("error");
    }else{
        console.warn("connect");
    }
});
module.exports = con;