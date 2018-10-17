function serviceLayer() {

    this.init = function () {
        //(1)引入userDao模块
        var dataBase = require('../database/database');
        //(2)创建对象
        this.database = new dataBase();
        //(3)对象初始化
        this.database.init();
    }

    this.insert = function (name,email,password,tel, call) {

        var resData = {
            insertId: -1,
            msg: ''
        }
        //var name=this.crypto(name);
        //var password=this.crypto(password);
 var crypto=require("../Tools/tool")
        var name=crypto(name);
        var email=crypto(email);
        var password=crypto(password);
        var tel=crypto(tel);

        var that = this;
        this.checkUser(tel, function (result) {
            if (result) {
                resData.msg = "用户已存在！";
                call(resData);
            } else {
                that.database.insertUser(name,email,password,tel, function (data) {
                    resData.msg = "注册成功";
                    resData.insertId = data.insertId;
                    call(result);
                    call(resData);

                })
            }

        })
    }

    this.selectUserByName = function (tel, call) {
        //(1)查询用户数据
        this.database.selectUserByName(tel, function (result) {

            call(result);
        })
    }
    this.checkUser = function (tel, call) {
        this.selectUserByName(tel, function (result) {
            if (result.length == 0) {
                call(false);
            } else {
                call(true);
            }
        });
    }


}
module.exports = serviceLayer;