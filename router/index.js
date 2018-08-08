var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var main = require('./main/main')
var email = require('./email/email')
var join = require('./join/index')//.js는 생략 가능

//url routing
router.get('/',function(req,res) {
     console.log('indexjs /path loaded')
     res.sendFile(path.join(__dirname, "../public/main.html"))
});

router.use('/main', main) //메인으로 들어오면 라우터 정보로 가서 필요한 처리를 하게 함
router.use('/email', email)
router.use('/join', join)

module.exports = router;
