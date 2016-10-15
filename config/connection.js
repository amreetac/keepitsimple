// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// we placed the connections in this source object
var source = {
   
    // localhost: {
    //     port: 3306,
    //     host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    //     user: 'eu4xz0nyaonngbf4',
    //     password: "c377x1xc6713qabw",
    //     database: "odozzhsdf95oio5k"  
    // },

localhost: {
        "port": 3306,
        "host": "127.0.0.1",
        "user": "root",
        "password": "nodeAPP001",
        "database": "simplefooddb" , 
        "dialect": "mysql"
    },
    // jawsDB
    jawsDB: {
        port: 3306,
        host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'eu4xz0nyaonngbf4',
        password: "c377x1xc6713qabw",
        database: "odozzhsdf95oio5k" 
    }
}

// we use source.[name of connection] to hook into mysql
 //var connection = mysql.createConnection( source.localhost || source.jawsDB );
var connection = mysql.createConnection(source.localhost);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
