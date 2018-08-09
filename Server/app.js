var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./router/index')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session')
var flash = require('connect-flash')

app.listen(8000, function() {
     console.log("start, express server on port 8000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) //한글이나 특수기호들 치환해야해서 인코딩
app.set('view engine', 'ejs')//view engine단어는 ejs이다
app.use(session({
     secret : 'keyboard cat',
     resave : false,
     saveUninitialized : true
}))//session의 기본값, router전에 처리해줘야 함, 라우터에서 쓰기 때문
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())//메시지를 쉽게 전달해주는 메소드

app.use(router)
