let express = require('express')
let bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/status',function(req,res){
    res.send('Hello nodejs server belong to patipol kaeomuang')
})

app.get('/hello/:person',function(req,res){
    console.log('hello - ' + req.params.person)
    res.send('say hello with ' +req.params.person)
})

app.get('user/:userId',function(req,res){
    res.send('ดูข้อมูลผู้ใช้'+ req.params.userId)
})

app.get('/users', function(req,res){
    res.send('เรียกข้อมูล ผู้ใช้ทั้งหมด')
})

app.put('/user/:userId', function (req,res){
    res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userid + JSON.stringify(req.body.name))
})

app.delete('/user/:userId', function (req,res){
    res.send('ลบข้อมูลผู้ใช้ ' + req.params.userid + JSON.stringify(req.body.name))
})

let port = 8081
app.listen(port, function(){
    console.log('server running on ' + port)
})