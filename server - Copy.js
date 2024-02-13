// const http = require('http');

// const hostname = '127.0.0.1';

// const port = 3000;

// const server = http.createServer((req,res) =>{
//     res.statusCode = 200;
//     res.setHeader("Content-Type","text/plain");
//     res.end("Hello world uncle");
// });

// server.listen(port,hostname,() =>{
//     console.log(`server running at http://${hostname}:${port}/`);
// });

// ctrl + C  เพื่อยกเลิก server

//----------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();
// const port = 3000;

// var mysql = require('mysql');
// var pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'my-product'
// });

// app.get('/' , (req,res) => {
//     res.send('Hello World by Express!')
// }); 

// app.get('/users' , (req,res) => {
//     // res.send('Getting all user to you')
//     pool.query("SELECT * FROM user" , function (error, results , fields) {
//         if (error) throw error;

//         res.json(results);
//     });
// }); 

// app.get('/users/:userId' , (req,res) => {
//     const userId = req.params.userId;

//     pool.query("SELECT * FROM user WHERE user_id = ?", [userId], function (error, results , fields) {
//         if (error) throw error;

//         res.json(results);
//     });
// }); 


// app.listen(port , () => {
//     console.log(`Example app listening on port ${port}`)
// });

//----------------------------------------------------------------------------------------------------------------------------------

const express = require('express');
const app = express();
const port = 3000;


var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my-product'
});

app.get('/users', (req, res) => {
    // res.send('Getting all user to you')
    pool.query("SELECT * FROM users", function (error, results, fields) {
        if (error) throw error;

        res.json(results);
    });
});

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());


// app.post('/add_user', (req, res) => {
//     const input = req.body;

//     pool.query(
//         "INSERT INTO users (user_id, user_name, user_pwd, first_name ,last_name, email) VALUES (?, ?, ?, ?, ? ,?)",
//         [
//             input.user_id,
//             input.user_name,
//             input.user_pwd,
//             input.first_name,
//             input.last_name,
//             input.email
//         ], function (error, results, fields) {
//             if (error) throw error;

//             res.json(results);
//         });

// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});



app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    pool.query("SELECT * FROM users WHERE user_name = ? AND user_pwd = ?", [username, password], function (error, results, fields) {
        if (error) {
            res.json({
                results: false,
                message: error.message
            });
        }

        if (results.length) {
            res.json({
                results: "เยี่ยม ผ่านแล้ว"
            });
        } else {
            res.json({
                results: false,
                massage: "ไม่ทราบ Username หรือ Password ไม่ถูกต้อง"
            });
        }
    });

});