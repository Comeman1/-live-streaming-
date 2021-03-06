

module.exports=function(source){

    //1,引入加密模块
    var crypto = require('crypto');
//2，生成口令的散列值，crypto模块功能是加密并生成各种散列，createHash(algorithm)方法 ,这是利用给定的算法生成hash对象
    var md5 = crypto.createHash('md5');
//3,digest([encoding])方法，计算数据的hash摘要值，encoding是可选参数，不传则返回buffer (encoding可为 'hex'、'base64'等)；
    var en_data = md5.update(source).digest('hex');
    return en_data;
}