const passport = require('passport');
const express = require('express');
const path = require('path');
const router = express.Router(); //라우터 분리
router.get('/', (req, res) => { //app대신 router에 연결
     res.render('main');
});
router.get('/about', (req, res) => {
     res.render('about');
});
module.exports = router; //모듈로 만드는 부분
