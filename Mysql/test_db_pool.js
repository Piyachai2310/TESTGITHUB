var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my-product'
});

var name = 't';
var email = "tartar@gmail.com";
pool.query('SELECT * FROM user WHERE User_name LIKE ? AND email = ?', ['%' + name + '%', email],
    function (error, result, fields) {
        if (error) throw error;

        console.log(result);
});

