exports.login = function(req,res){
    res.render('login',{});
}


exports.register=function (req,res) {
    //1,�����ͻ����ύ������
    var name = req.body.name;
    var password = req.body.password;
    //2,��ҵ���Ҫ����
    //(1),����UserServiceģ��
    var Service = require('../Services/Service');
    //(2),����UserService����
    var service = new Service();
    service.init();
    //(3),�����û�
    service.insert(name, email, password, tel, function (result) {
        //3,�����ݴ���view
        res.end(JSON.stringify(result));
    });
}
