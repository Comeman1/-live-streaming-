exports.login = function(req,res){
    res.render('login',{});
}


exports.register=function (req,res) {
    //1,解析客户端提交的数据
    var name = req.body.name;
    var password = req.body.password;
    //2,向业务层要数据
    //(1),引入UserService模块
    var Service = require('../Services/Service');
    //(2),创建UserService对象
    var service = new Service();
    service.init();
    //(3),插入用户
    service.insert(name, email, password, tel, function (result) {
        //3,把数据传给view
        res.end(JSON.stringify(result));
    });
}
