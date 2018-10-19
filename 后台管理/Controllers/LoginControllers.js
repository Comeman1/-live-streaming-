
exports.login=function(req,res){
    if(req.session.sign){
        res.render('login',{state:2});
        return;
    }

    var name =req.cookies.name;
    var password=req.cookies.password;

    if(name==null||password==null){
        res.render('login',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/loginUserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('login',{state:2});
            }else{
                res.render('login',{state:-1});
            }
        },1);
    }
}

exports.login=function(req,res){
    //1,解析客户端提交的数据
    var crypto=require("../Tools/tool")
    var name  = crypto(req.body.name);
    var password  = crypto(req.body.password);
    //2,验证用户是否合法
    //(1)引入userService
    var UserService = require('../Services/LoginUserService');
    //(2)创建对象
    var  userService = new UserService();
    //(3)对象初始化
    userService.init();
    //(4)验证用户是否合法
    userService.checkUser(name,password,function(result){

        if(result.state==2) {
            req.session.sign = true;
            res.cookie('name', result.name, {maxAge: 60 * 60 * 1000});
            res.cookie('password', result.password, {maxAge: 60 * 60 * 1000});
        }
        result.name=null;
        result.password=null;
        res.end(JSON.stringify(result));
    });

    res.end(JSON.stringify(result.name));
    console.log("登陆成功");
}
