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

const express = require('express');
const app = express();
const port = 3000;

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mygame' // ชื่อ Node
});

app.get('/' , (req,res) => {
    res.send('Hello World by Express!')
}); 

app.get('/users' , (req,res) => {
    // res.send('Getting all user to you')
    pool.query("SELECT * FROM gaming" , function (error, results , fields) {
        if (error) throw error;
    
        res.json(results);
    });
}); 

app.get('/users/GameId/:GameId', (req, res) => {
    const GameId = req.params.GameId;

    pool.query("SELECT * FROM gaming WHERE GameId = ?", [GameId], function (error, results, fields) {
        if (error) throw error;

        res.json(results);
    });
});


app.listen(port , () => {
    console.log(`Example app listening on port ${port}`)
});