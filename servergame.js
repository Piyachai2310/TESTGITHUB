const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const Product = require("./libs/product");
const util = require('util');
const multer = require("multer");

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
    database: 'mygame'
});

var pools = mysql.createPool({
    connectionLimit :10,
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'testdb'
});

pool.query = util.promisify(pool.query);

app.get ('/users',(req, res) =>{
   //res.send("Getting all users to you");
   pools.query("select * from game",function(error, results,fields){
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
    pools.query("SELECT * FROM users WHERE user_name = ? AND user_pwd = MD5(?)",[username,password],function (error,results,fields) {
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
    pools.query(sql, [req.body.username], (error, results) => {
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
        "FROM users a JOIN roles b ON a.role_id = b.role_id WHERE MD5(CONCAT(user_name, '&', user_pwd)) = ?";
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

app.use('/game_image',express.static('game_image'));    


let checkAuth = (req, res, next) => {
    let token = null;

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        token = req.query.token;
    } else {
        token = req.body.token;
    }
    console.log('\n');
    console.log('token:' , token);
    console.log('\n');
    console.log('authorization:' , req.headers.authorization);
    console.log('\n');

    if (token) {
        jwt.verify(token, "MySecretKey", (err, decoded) => {
            console.log('\n');
            console.log('err:' , err);
            console.log('decoded:' , decoded);
            if (err) {
                console.log('An error occurred !!!');
                res.send(JSON.stringify({
                    result: false,
                    message: "ไม่ได้เข้าสู่ระบบ"
                }));
            } else {
                req.decoded = decoded;
                console.log('decoded:' , req.headers.decoded);
                console.log('\n');
                next();
            }
        });
    } else {
        res.status(401).send("Not authorized");
    }    
}

app.get("/api/typegame", checkAuth, (req, res) => {
    const query = "SELECT * FROM typegame";
    console.log("1");
    pool.query(query, (error, result) => {
        // console.log("result: " , result);
        if(error) {
            console.log("2: Error");
            res.json({
                result: false,
                message: error.message
            })
        } else {
            console.log("2: Not Error");
            console.log("4: here");
            res.json({
                result: true,
                data: result
            });
        }
    });
});

app.post("/api/specifig", (req, res) => {
    const Game_Name =req.body.GameName;
    // console.log("game_name: " , Game_Name)
    const query = "SELECT * FROM game WHERE Game_Name = ?";
    pool.query(query,[Game_Name] , (error, result) => {
        // console.log("result: " , result);
        if(error) {
            // console.log("2: Error");
            res.json({
                result: false,
                message: error.message
            })
        } else {
            console.log("2: Not Error");
            res.json({
                result: true,
                data: result
            });
        }
    });
});

app.get("/api/gamedetail/:productId", checkAuth, async (req, res) => {
    const productId = req.params.productId;
    try{
        //Product คือชื่อฟังก์ชั่นที่ถูกเรียกไฟล์มา ง่ายๆคือ เอากำลังส่งค่าไปที่อีกไฟล์
        var result = await Product.getByProductId(pool, productId);
        console.log("result of server: ",result);
        res.json({
            result: true ,
            data: result
        });
    }
    catch (ex){
        res.json({
            result: false,
            message: ex.message
        });
    }
});

app.get("/api/game/type/:GameTypeId",checkAuth, (req, res) => {
    const GameTypeId = req.params.GameTypeId;
    console.log("GameTypeId:" , GameTypeId);
    let sql = "SELECT a.*, b.GameTypeName " + 
    "FROM game a " + 
    "JOIN typegame b ON a.GameType = b.GameType "; // แก้ไขตรงนี้
    
    if (GameTypeId == 0) {
        pool.query(sql, (error, results) => {
            // console.log("results" , results);
            if (error) {
                console.log("3: Error");
                res.json({
                    result: false,
                    message: error.message
                });
            } else {
                console.log("3: Not Error");
                res.json({
                    result: true,
                    data: results
                });
            }
        });
    } else {
        pool.query(sql + "WHERE a.GameType = ?",
        [GameTypeId], (error, results) => {
            if (error) {
                res.json({
                    result: false,
                    message: error.message
                });
            } else {
                // console.log("--for here GameType--");
                // console.log("check results: " , results);

                res.json({
                    result: true,
                    data: results
                });
            }
        });
    }         
});


// app.get("/api/gamedetail/:GameTypeId", (req, res) => {
//     const GameTypeId = req.params.GameTypeId;
//     console.log("GameTypeId:" , GameTypeId);
//     let sql = "SELECT a.*, b.GameTypeName " + 
//     "FROM game a " + 
//     "JOIN typegame b ON a.GameType = b.GameType "; // แก้ไขตรงนี้
    
//         pool.query(sql + "WHERE a.GameID = ?",
//         [GameTypeId], (error, results) => {
//             if (error) {
//                 res.json({
//                     result: false,
//                     message: error.message
//                 });
//             } else {
//                 console.log("--for here GameType--");
//                 // console.log("check results: " , results);

//                 res.json({
//                     result: true,
//                     data: results
//                 });
//             }
//         });       
// });


app.post("/api/product/add", checkAuth, async (req, res) => {
    console.log("server!! ");
    const input = req.body;
    try{
        //Product คือชื่อฟังก์ชั่นที่ถูกเรียกไฟล์มา ง่ายๆคือ เอากำลังส่งค่าไปที่อีกไฟล์
        var result = await Product.createProduct(pool, input.product_name, input.product_type_id, input.detail);
        console.log("result of server: ",result);
        res.json({
            result: true
        });
    }
    catch (ex){
        res.json({
            result: false,
            message: ex.message
        });
    }
});


// app.post("/api/product/update", async (req, res) => {
//       const input = req.body;
//       if (req.file) { // ถ้ามีไฟล์ใหม่เพิ่มเข้ามาจะเพิ่มไฟล์เข้าไปใน โฟลด์เดอและเปลี่ยนข้อมูลเดิม
//         input.image_url = req.file.filename;
//         // ถ้าเข้าเพิ่มไฟล์ใหม่ก็ให้ลบไฟล์เก่า โดยการหาชื่อไฟล์เก่าจาก db
//         var resultProduct= await Product.getByProductId(pool, input.product_id);
//         removeImage(resultProduct)
//       }
//       try {
//         var result = await Product.updateProduct(
//           pool,
//           Number(input.product_id),
//           input.product_name,
//           Number(input.product_type_id),
//           input.image_url,
//           Number(input.detail)
//         );
//         res.json({
//           result: true,
//         });
//       } catch (error) {
//         res.status(500).send({
//           result: false,
//           message: error.message,
//         });
//       }
//     }
//   );


app.post("/api/product/update", checkAuth, async (req, res) => {
    console.log("333333")
    const input = req.body;
    try {
      var result = await Product.updateProduct(pool,
        input.GameID,
        input.productName,
        input.product_type_id,
        input.detail
      );
      res.json({
        result: true,
      });
    } catch (error) {
      res.status(500).send({
        result: false,
        message: error.message,
      });
    }
  }
);
  
//   ลบ
  app.delete("/api/product/delete",checkAuth, async (req, res) => {
      const input = req.body
      console.log("Delete_body: " , input.gameId)
    //   console.log("Delete_body: " , input.gameid)
      try {
        console.log("Delete_LEVEL 1")
      var result = await Product.deleteProduct(pool, input.gameId);
      
      res.json({
        result: true,
      });
    } catch (error) {
      res.status(500).send({
        result: false,
        message: error.message,
      });
    }
  }
);
