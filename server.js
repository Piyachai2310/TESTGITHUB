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
const port = 8080;
const cors = require("cors");
app.use(cors());



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

app.get('/roles', (req, res) => {
    // res.send('Getting all user to you')
    pool.query("SELECT * FROM roles", function (error, results, fields) {
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

const jwt = require('jsonwebtoken'); // ต้อง import library jwt

app.post("/api/authen_request", (req, res) => {
    const sql = "SELECT * FROM users WHERE user_name = ?";
    pool.query(sql, [req.body.username], (error, results) =>{
        var response;
        if(error) {
            console.log(response);
            response = {
                result: false,
                message: error.message
            };
        }
        else{
            if (results.length){
                var payload = { username: req.body.username };
                var secretKey = "MySecretKey";
                const authToken = jwt.sign(payload, secretKey);
                console.log("start test");
                console.log("start test");
                // res.json(authToken);
                response = {
                    result:true,
                    data: {
                        auth_token: authToken
                    }
                };
            }
            else{
                response = {
                    result: false,
                    message: "Username ไม่ถูกต้อง"
                };
            }
        }
        res.json(response);
    });
});

app.post("/api/access_request", (req, res) => {
    const authenSignature = req.body.auth_signature;
    const authToken = req.body.auth_token;
    // console.log("1");
    // console.log(authToken);
    try {
        var decoded = jwt.verify(authToken, "MySecretKey");
        // console.log(decoded);
        if (decoded) {
            const query = "SELECT a.user_id, a.user_name, a.user_pwd, a.first_name, a.last_name, a.email, a.role_id, b.role_name "
                + "FROM users a JOIN roles b ON a.role_id = b.role_id WHERE MD5(CONCAT(user_name, '&', user_pwd)) = ?";
            pool.query(query, [authenSignature], (error, results) => {
                var response;
                if (error) {
                    response = {
                        result: false,
                        message: error.message
                    };
                    res.json(response);
                } else {
                    if (results.length) {
                        var payload = {
                            user_id: results[0].user_id,
                            username: results[0].user_name,
                            first_name: results[0].first_name,
                            last_name: results[0].last_name,
                            email: results[0].email,
                            role_id: results[0].role_id,
                            role_name: results[0].role_name
                        };
                        const accessToken = jwt.sign(payload, "MySecretKey");
                        response = { result: true, data: { access_token: accessToken, account_info: payload } };
                        res.json(response);
                    } else {
                        response = { result: false, message: "Username หรือ Password ไม่ถูกต้อง" };
                        res.json(response);
                    }
                }
            });
        }
    } catch (verifyError) {
        res.json({ result: false, message: "ไม่สามารถตรวจสอบ Token ได้" });
    }
});

app.listen(port , () => {
    console.log(`Example app listening on port ${port}`)
});
