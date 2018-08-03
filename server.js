const express = require('express');
const path = require('path');
const session = require('express-session'); //세션 설정
const db = require('./db.js');
const route = require('./route.js');
const passport = require('passport');//여기와
const passportConfig = require('./passport') //여기
const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'html'));
app.use(session({secret: '비밀코드', resave: true, saveUninitialized: false})); //세션 활성화
app.use(passport.initialize()); //passport 구동
app.use(passport.session()); //세션 연결
db();
passportConfig(); //이 부분 추가
app.use(express.static(path.join(__dirname, 'html')));
app.use('/', route);
app.listen(8080, () => {
     console.log('Express App on port 8080!');
});
