
exports.index=function(req,res){
    if(req.session.sign){
        res.render('index',{state:2});
        return;
    }

    var tel =req.cookies.tel;
    var password=req.cookies.password;

    if(tel==null||password==null){
        res.render('index',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/loginUserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(tel,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('index',{state:2});
            }else{
                res.render('index',{state:-1});
            }
        },1);
    }
}

exports.login=function(req,res){
    //1,解析客户端提交的数据
    var crypto=require("../Tools/tool")
    var tel  = crypto(req.body.tel);
    var password  = crypto(req.body.password);
    //2,验证用户是否合法
    //(1)引入userService
    var UserService = require('../Services/LoginUserService');
    //(2)创建对象
   var  userService = new UserService();
    //(3)对象初始化
    userService.init();
    //(4)验证用户是否合法
    userService.checkUser(tel,password,function(result){
<<<<<<< HEAD
=======
        if(result.state==2) {
            req.session.sign = true;
            res.cookie('tel', result.tel, {maxAge: 60 * 60 * 1000});
            res.cookie('password', result.password, {maxAge: 60 * 60 * 1000});
        }
        result.tel=null;
        result.password=null;
        res.end(JSON.stringify(result));
    });
>>>>>>> origin/master

        res.end(JSON.stringify(result.name));
        console.log("登陆成功");

    });
}