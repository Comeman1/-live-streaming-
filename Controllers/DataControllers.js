
exports.index = function(req, res){

    var mysql  = require('mysql');  //����MySQLģ��

//1������һ��connection
    var connection = mysql.createConnection({
        host     : 'localhost',       //���� ip
        user     : 'root',            //MySQL��֤�û���
        password : '123456',                //MySQL��֤�û�����
        port: '3306',                 //�˿ں�
        database:'yoo'          //���ݿ����������
    });
//2,����
    connection.connect();
//3,��дsql���
    var  userdataSql = 'SELECT * FROM data';
//4,���в�ѯ����
    connection.query(userdataSql,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }
        console.log(result);
        res.render('index',{products:result})
    });
//5,���ӽ���
    connection.end();
};