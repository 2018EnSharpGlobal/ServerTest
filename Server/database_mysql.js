const express = require('express');
const app = express();

var mysql = require('mysql')
var conn = mysql.createConnection({
     host : 'localhost',
     user : 'root',
     password : 'p9554936',
     database : 'servertest'
})

conn.connect();

app.post('/post', (req, res) => {
     console.log('who get in here post /users');
     var inputData;
     var keyword;

     req.on('data', (data) => {
          inputData = JSON.parse(data);
          var sql = 'select * from user where email=?';
          var params = inputData.email;
          conn.query(sql, params, function(err, rows, fields) {
               if(err){
                    console.log(err);
               } else {
                    for(var i=0; i<rows.length; i++){
                         console.log(rows[i].name);
                         keyword = String(rows[i].name);
                    }
                    //console.log('rows', rows);
                    //console.log('fields', fields);
                    res.write(keyword);
                    res.end();
               }
          });
          console.log(keyword);
     });

     req.on('end',() => {
          //console.log("user_id : "+inputData.user_id + " , name : "+inputData.name);
     });


     // res.end('/', function(res,req){
     //      console.log(keyword);
     // });

});




//
// var sql = 'select * from user where email=?';
// var params = ['gihop95@gmail.com'];
// conn.query(sql, params, function(err, rows, fields) {
//      if(err){
//           console.log(err);
//      } else {
//           for(var i=0; i<rows.length; i++){
//                console.log(rows[i].name);
//           }
//           //console.log('rows', rows);
//           //console.log('fields', fields);
//      }
// });

app.listen(8000, () => {
     console.log('example app listening on port 8000!');
});
