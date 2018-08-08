var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./router/index')

app.listen(3000, function() {
     console.log("start, express server on port 3000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))//한글이나 특수기호들은 다른 문자로 치환해서 보내야하기 때문에 인코딩 함
app.set('view engine', 'ejs')//view engine단어는 ejs이다
app.use(router)

//app.js 에 모든 코드를 넣지말고 require와 export를 써서 파일을 나눠서 관리하면 좋음
