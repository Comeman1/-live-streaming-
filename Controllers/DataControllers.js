
exports.index = function(req, res){

    var mysql  = require('mysql');  //调用MySQL模块

//1，创建一个connection
    var connection = mysql.createConnection({
        host     : 'localhost',       //主机 ip
        user     : 'root',            //MySQL认证用户名
        password : '123456',                //MySQL认证用户密码
        port: '3306',                 //端口号
        database:'yoo'          //数据库里面的数据
    });
//2,连接
    connection.connect();
//3,编写sql语句
    var  userdataSql = 'SELECT * FROM data';
//4,进行查询操作
    connection.query(userdataSql,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }
        console.log(result);
        res.render('index',{products:result})
    });
//5,连接结束
    connection.end();
};