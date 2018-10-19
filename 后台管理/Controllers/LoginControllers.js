
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
        //(1)����userService
        var UserService = require('../Service/loginUserService');
        //(2)��������
        var userService = new UserService();
        //(3)�����ʼ��
        userService.init();
        //(4)��֤�û����Ϸ�
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
    //1,�����ͻ����ύ������
    var crypto=require("../Tools/tool")
    var name  = crypto(req.body.name);
    var password  = crypto(req.body.password);
    //2,��֤�û��Ƿ�Ϸ�
    //(1)����userService
    var UserService = require('../Services/LoginUserService');
    //(2)��������
    var  userService = new UserService();
    //(3)�����ʼ��
    userService.init();
    //(4)��֤�û��Ƿ�Ϸ�
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
    console.log("��½�ɹ�");
}
