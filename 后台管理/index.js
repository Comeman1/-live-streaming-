//1,����express
var express = require('express');
var app = express();

//2,����ģ������
var path = require('path');
//3,������ͼ��ַ
app.set('views', path.join(__dirname, '/views'));
//4,����ejs����
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

//5,��̬�ļ�
app.use(express.static('public'));

//6,����body-parserģ��
var bodyParser = require('body-parser');
//7������ application/x-www-form-urlencoded �������
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//1,��ҳ
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




//����
app.listen(1111,function(){
    console.log("[Server is running at http://localhost:1111]");
});
