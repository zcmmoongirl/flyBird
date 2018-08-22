/**
 * Created with Cocos2d-x3.0 jsb.
 * User: ZhangChuanmin/16120477@bjtu.edu.cn
 * Date: 2018/8/219:39
 * Function:
 *
 */
    function loadImage(imgUrl,fn) {
        var imgObj = {}; //存储加载完毕后的图像
        var loaded = 0;
        var imgLen = 0;
        var tempImg = null;  //创建临时的图像
        for(var key in imgUrl){
            imgLen++;
            tempImg = new Image();
            tempImg.onload = function () {
                loaded++;
                if(loaded >= imgLen){
                    fn(imgObj);
                }
            }
            tempImg.src = imgUrl[key];
            imgObj[key] = tempImg;
        }
    }
    function extend(o1,o2) {
        for(var key in o2){
            if(o2.hasOwnProperty(key)){
                o1[key] = o2[key];
            }
        }
    }
    function angleToRadian(angle) {
        return Math.PI/180*angle;
    }