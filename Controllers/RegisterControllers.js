
exports.index=function(req,res){
    if(req.session.sign){
        res.render('index',{state:2});
        return;
    }
    var name = req.cookies.name;
    var email = req.cookies.email;
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
    //验证用户是否合法
    service.checkUser(tel,password,function(result){
        if(result.state==2) {
            req.session.sign = true;
            res.cookie('tel', result.tel, {maxAge: 60 * 60 * 1000});
            res.cookie('password', result.password, {maxAge: 60 * 60 * 1000});
        }
        result.tel=null;
        result.password=null;
        res.end(JSON.stringify(result));
    });
}
