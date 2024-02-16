const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

const jwt = require("jsonwebtoken");

const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit :10,
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'my-product'
});

app.post('/add_user', (req, res) => {
    const { id, name, old, weight, email } = req.body;

    pool.query("INSERT INTO users (id, name, old, weight, email) VALUES (?, ?, ?, ?, ?)",
        [id, name, old, weight, email],
        function(error, results, fields) {
            if (error) {
               if (error) throw error;
            }

            res.json(results);
        }
    );
});


    



app.get ('/',(req, res) =>{
    res.send('Hello');
});

app.get ('/users',(req, res) =>{
   //res.send("Getting all users to you");
   pool.query("select * from users",function(error, results,fields){
    if (error) throw error;

    res.json(results);
   });
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});

app.post("/login", (req, res) =>{
    const username =req.body.username;
    const password =req.body.password;
    pool.query("SELECT * FROM users WHERE user_name = ? AND user_pwd = MD5(?)",[username,password],function (error,results,fields) {
        if(error){
            res.json({
                result: false,
                message : error.message
            });
        }
    
        
        if(results.length){
            res.json({
                result : true
            });
        }
        else{
            res.json({
                result: false,
                message : "ไม่พบ username or password ไม่ถูกต้อง"
            });
        }
    })
});

app.post("/api/authen_request", (req, res) => {
    const sql = "SELECT * FROM users WHERE MD5(user_name) = ?";
    pool.query(sql, [req.body.username], (error, results) => {
        var response;
        if (error) {
            response = {
                result: false,
                message: error.message
            };
        } else {
            if (results.length) {
                console.log("start")
                var payload = { username: req.body.username };
                var secretKey = "MySecretKey";
                console.log("start2")
                const authToken = jwt.sign(payload, secretKey);
                console.log("start3")
                response = {
                    result: true,
                    data: {
                        auth_token: authToken
                    }
                };
            } else {
                response = {
                    result: false,
                    message: "Username ไม่ถูกต้อง"
                };
            }
        }
        console.log(results);
        res.json(response);
        
    });
});




app.post("/api/access_request", (req, res) => {
    const authenSignature = req.body.auth_signature;
    const authToken = req.body.auth_token;

    var decoded = jwt.verify(authToken, "MySecretKey");

    if (decoded) {
        const query = "SELECT a.user_id, a.user_name, a.first_name, a.last_name, a.email, a.role_id, b.role_name " +
        "FROM users a JOIN roles b ON a.role_id = b.role_id WHERE MD5(CONCAT(user_name, '&', MD5(user_pwd))) = ?";
            pool.query(query, [authenSignature], (error, results) => {
                var response ;
                if (error) {
                    response = {
                        result: false,
                        message: error.message
                    };
                } else {
                    if (results.length) {
                        var payload = {
                            user_id: results[0].user_id, 
                            user_name: results[0].user_name, 
                            first_name: results[0].first_name,
                            last_name : results[0].last_name, 
                            email: results[0].email,
                            role_id: results[0].role_id, 
                            role_name: results[0].role_name
                        };
                        const accessToken = jwt.sign(payload, "MySecretKey");
                        response = { result: true, data: { access_token: accessToken, account_info: payload}};
                    } else {
                        response = { result: false, message: "Username หรือ Password ไม่ถูกต้อง"};
                    }
                }
                res.json(response);

                console.log(authenSignature);
                console.log(results);
                console.log(response);
            });
    }
});