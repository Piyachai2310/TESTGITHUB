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
    database: 'mygame'
});


app.get ('/users',(req, res) =>{
   //res.send("Getting all users to you");
   pool.query("select * from game",function(error, results,fields){
    if (error) throw error;

    res.json(results);
   });
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});


app.use('/game_image',express.static('game_image'));    



app.get("/api/game", (req, res) => {
    const query = "SELECT * FROM game";
    // console.log("1");
    pool.query(query, (error, result) => {
        if(error) {
            console.log("2: Error");
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


app.get("/api/typegame", (req, res) => {
    const query = "SELECT * FROM typegame";
    // console.log("1");
    pool.query(query, (error, result) => {
        if(error) {
            console.log("2: Error");
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

app.get("/api/game/type/:GameTypeId", (req, res) => {
    const GameTypeId = req.params.GameTypeId;
    console.log("GameTypeId:" , GameTypeId);
    let sql = "SELECT a.*, b.GameTypeName " + 
              "FROM game a " + 
              "JOIN typegame b ON a.GameType = b.GameType "; // แก้ไขตรงนี้
    
    if (GameTypeId == 0) {
        pool.query(sql, (error, results) => {
            console.log("results" , results);
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
                res.json({
                    result: true,
                    data: results
                });
            }
        });
    }         
});