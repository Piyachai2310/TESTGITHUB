var mysql = require('mysql');
var connection = mysql.createConnection( {
    host: 'localhost' ,
    user: 'root' ,
    password: '' ,
    database: 'mygame'
});

connection.connect();

connection.query('SELECT * FROM gaming' , function (error, results , fields) {
    if (error) throw error;

    console.log(results);
});

connection.end()