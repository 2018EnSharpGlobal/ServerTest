var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

//DATABASE SETTING
var connection = mysql.createConnection({
     host : 'localhost',
     port : 3306,
     user : 'root',
     password : 'p9554936',
     database : 'servertest'
})

connection.connect()

//ROUTER
router.get('/', function(req,res) {
     console.log('get join url');
     res.render('join.ejs');
})

// passport.use('local-join', new LocalStrategy({
//      usernameField : 'email',
//      passReqToCallback : true
//    }, function(req, email, done) {
//      var query = connection.query('select name from user where email=?', [email], function(err, rows) {
//           if(err) return done(err);
//
//           if(rows.length) {
//                console.log('existed user')
//                query = connection.query('select name from user where email=?', [email], function(err,rows) {
//                     if(err) return done(err);
//                     if(rows.length){
//                          console.log(query)
//                     }
//                })
//                return done(null, body.name, {'name' : name, 'id' : rows.insertId})//false는 failureRedirect로 간다
//           } else {
//                var sql = {email: email};
//                var query = connection.query('insert into user set ?', sql, function(err, rows) {
//                     if(err) throw err
//                     return done(null, {'name' : name, 'id' : rows.insertId});
//                })
//           }
//       })
//    }
// ));

// router.post('/', passport.authenticate('local-join', {
//      successRedirect: '/main',
//      failureRedirect: '/join',
//      failureFlash : true})
// )

router.post('/', function(req,res,name) {
     var body = req.body;
     var name = body.name;
     console.log('hi');
     console.log(name);
})

module.exports = router;
