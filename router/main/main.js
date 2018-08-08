var express = require('express')
var app = express()
var router = express.Router(); //라우터 메소드 실행
var path = require('path'); //상대경로로 이동하기 위한 메소드

router.get('/', function(req,res) {
     res.sendFile(path.join(__dirname, '../public/main.html'))
});

module.exports = router; //다른파일에서 이 파일을 쓸 수 있게 해줌
