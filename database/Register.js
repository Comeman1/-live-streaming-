/**
 * Created by 10143 on 2018/10/16.
 */
function User() {
    this.init=function(){
        //1,引入MySQL模块
        var mysql = require('mysql');  //调用MySQL模块
        //2，创建一个connection
        this.connection = mysql.createConnection({
            host: 'localhost',       //主机 ip
            user: 'root',            //MySQL认证用户名
            password: 'guoxiu',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database: 'express'          //数据库里面的数据
        });
        //3，连接
        this.connection.connect();
    }
    this.insert=function(name,email,tel,password,call){
        //1，编写sql语句
        var  userAddSql = 'INSERT INTO login(name,email,tel,password) VALUES(?,?,?,?)';
        var  userAddSql_Params = [name,email,tel,password];
        //2,进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，userAddSql_Params，sql语句中的值
         * 3，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(userAddSql,userAddSql_Params,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            call(result);
        });
    }
    this.selectUserByName = function (name,call) {
        //1,编写sql语句
        var userGetSql = "SELECT password FROM login WHERE name ='"+name+"'";
        //2,进行查询操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }

            call(result);
        });
    }
    this.end=function () {
        this.connection.end();
    }
}

module.exports=User;