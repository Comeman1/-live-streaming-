/**
 * Created by 10143 on 2018/10/16.
 */
/*数据库初始化层*/
function dataBase(){
        this.init=function(){
            var mysql  = require('mysql');  //调用MySQL模块

            //1，创建一个connection
            this.connection = mysql.createConnection({
                host     : 'localhost',       //主机 ip
                user     : 'root',            //MySQL认证用户名
                password : '123456',                //MySQL认证用户密码
                port: '3306',                 //端口号
                database:'yoo'          //数据库里面的数据
            });
            //2,连接
            this.connection.connect();
        }

        this.selectUserByName=function(tel,call){
            //1,编写sql语句
            var  sql = "SELECT password FROM login where tel='"+tel+"'";
            //2,进行查询操作
            /**
             *query，mysql语句执行的方法
             * 1，userAddSql编写的sql语句
             * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
             */
            this.connection.query(sql,function (err, result) {
                if(err){
                    console.log('[select ERROR] - ',err.message);
                    return;
                }
                call(result);
            });
        }
        this.insertUser=function(name,email,password,tel,call){
//(1)执行插入
            var  sqlInsert = 'INSERT INTO login(name,email,password,tel) VALUES(?,?,?,?)';
            var  paramsInsert = [name,email,password,tel];

            this.connection.query(sqlInsert,paramsInsert,function (err, result) {
                if(err){
                    console.log('[INSERT ERROR] - ',err.message);
                    return;
                }
                call(result);
            });
        }
    }
module.exports = dataBase;