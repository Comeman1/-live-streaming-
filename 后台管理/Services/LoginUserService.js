
/**
 * Created by 10143 on 2018/10/17.
 */
function UserService(){

    //�����ʼ��
    this.init=function(){
        //(1)����UserDaoģ��
        var UserDao =  require('../database/UserDao');
        //(2)��ö���
        this.userDao = new UserDao();
        //(3)�����ʼ��
        this.userDao.init();
    }

    this.checkUser=function(name,password,call){

        //(1)�û�������
        this.selectUserByName(name,function(result){
            var  body={
                state:0,
                msg:"hello",
                name:""
            }

            //1,�������ĳ���
            var length = result.length;

            if(length==0){
                body.msg="û�е�ǰ�û��˺ţ���ȷ���˺��Ƿ���ȷ�����û���˺ţ���ע�����û���"
            }else{
                //2,������������������ȡ����
                var  buffer = result[0].password;

                //3,�ж��û��Ƿ�Ϸ�
                if(password==buffer){
                    state:2,
                        body.msg="��¼�ɹ���";
                    body.name=result[0].name;
                }else{
                    state:1,
                        body.msg="��¼ʧ�ܣ���������������������룡";
                }
            }
            call(body);
        });

    }
    this.selectUserByName=function(name,call){
        //(4)��ѯ����
        this.userDao.selectUserByName(name,function(result){
            call(result);
        });
    }

}
module.exports=UserService;