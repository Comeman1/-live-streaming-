/**
 * Created by 10143 on 2018/10/16.
 */
function UserService() {

    this.insert=function(name,email,tel,password,call){
        //1,验证当前用户是否存在
        var User =  require('../database/Register');
        //(2) 创建对象
        var user = new User();
        //(3)对象初始化
        user.init();
        //(4) 查询用户
        user.selectUserByName(name,function(result){

            //(1)获得数据的长度
            var length =result.length;
            //(2) 长度为0的时候，注册用户
            if(length==0){
                user.insert(name,email,tel,password,function(data){
                    //console.log(data);
                    alert("注册成功");
                })
                user.end();
            }else{
                alert("用户已经存在");
            }
        });
    }
}
module.exports=UserService;
