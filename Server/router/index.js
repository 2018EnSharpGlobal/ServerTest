var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var join = require('./join/index')//.js는 생략 가능

//url routing
router.get('/',function(req,res) {
     console.log('indexjs /path loaded')
     res.sendFile(path.join(__dirname, "../public/main.html"))
});

router.use('/join', join)

module.exports = router;
