/**
 * Created by 10143 on 2018/10/17.
 */
function UserService(){

    //对象初始化
    this.init=function(){
        //(1)引入UserDao模块
        var UserDao =  require('../database/UserDao');
        //(2)获得对象
        this.userDao = new UserDao();
        //(3)对象初始化
        this.userDao.init();
    }

    this.checkUser=function(tel,password,call){

        //(1)用户工具类
        this.selectUserByName(tel,function(result){
            var  body={
                state:0,
                msg:"hello",
                name:""
            }

            //1,获得数组的长度
           var length = result.length;

            if(length==0){
                body.msg="没有当前用户账号，请确认账号是否正确，如果没有账号，请注册新用户！"
            }else{
                //2,把密码从数组对象里面取出来
                var  buffer = result[0].password;
                //3,判断用户是否合法
                if(password==buffer){
                    state:2,
                        body.msg="登录成功！";
                    body.name=result[0].name;
                }else{
                    state:1,
                        body.msg="登录失败，密码错误，请重新输入密码！";
                }
            }
            call(body);
        });

    }
    this.selectUserByName=function(tel,call){
        //(4)查询密码
        this.userDao.selectUserByName(tel,function(result){
            call(result);
        });
    }

}
module.exports=UserService;