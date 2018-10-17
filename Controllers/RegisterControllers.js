/**
 * Created by 10143 on 2018/10/16.
 */

exports.register=function (req,res) {
    //1,解析数据
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var tel = req.body.telephone;
    //2,插入数据
    //(1)引入UserService模块
    var Service = require("../Services/RegisterService");
    //(2) 创建对象
    var service = new Service();
    //(3) 注册用户
    service.insert(name,email,password,tel,function(result){
        //(1)把对象转为json格式数据
        var data = JSON.stringify(result);
        //(2)返回数据
        res.end(data);
    })
}