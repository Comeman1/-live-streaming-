//1,引入express
var express = require('express');
var app = express();

//2,设置模板引擎
var path = require('path');
//3,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//4,设置ejs引擎
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

//5,静态文件
app.use(express.static('public'));

//6,引入body-parser模块
var bodyParser = require('body-parser');
//7，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//1,首页
var indexControllers = require('./Controllers/IndexControllers');
app.get('/login',indexControllers.login);
var IndexControllers = require('./Controllers/LoginControllers');
//app.post('/index',urlencodedParser,IndexControllers.index);


app.get('/index',function (req,res) {
    res.render('index',{});
});
app.get('/from',function (req,res) {
    res.render('from',{});
});
app.get('/back_up',function (req,res) {
    res.render('back_up',{});
});
app.get('/findPassword',function (req,res) {
    res.render('findPassword',{});
});
app.get('/from',function (req,res) {
    res.render('from',{});
});
app.get('/post',function (req,res) {
    res.render('post',{});
});
app.get('/selectVideo',function (req,res) {
    res.render('selectVideo',{});
});
app.get('/update',function (req,res) {
    res.render('update',{});
});
app.get('/vip',function (req,res) {
    res.render('vip',{});
});
app.get('/wooden_horse',function (req,res) {
    res.render('wooden_horse',{});
});




//监听
app.listen(1111,function(){
    console.log("[Server is running at http://localhost:1111]");
});
