/**
 * Created by 10143 on 2018/10/17.
 */

exports.login=function(req,res){
    //1,解析客户端提交的数据
    var tel  = req.body.tel;
    var password  = req.body.password;
    //2,验证用户是否合法
    //(1)引入userService
    var UserService = require('../Services/LoginUserService');
    //(2)创建对象
   var  userService = new UserService();
    //(3)对象初始化
    userService.init();
    //(4)验证用户是否合法
    userService.checkUser(tel,password,function(result){
        res.end(JSON.stringify(result));
    });

}