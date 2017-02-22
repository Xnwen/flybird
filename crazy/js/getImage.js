/**
 * Created by 晓娜 on 2016/10/18.
 */
/*
 * constructor { getImage } 加载图片资源
 * param { imgUrl：Object} 图片的路径
 * param { callback:Function} 回调
 * */
function getImage(imgUrl,callback){
    var imgNames = Object.keys(imgUrl),
        imgObj = {},
        i= 0,
        len = imgNames.length,
        img,key,
        imgLoadedNumber = 0;
    for(;i < len;i++){
        key = imgNames[i]
        img = new Image();
        img.src=imgUrl[key];
        //将图片资源存在对象中
        imgObj[key]=img;
        img.addEventListener("load",function(){
            if(++imgLoadedNumber >= len){
                callback(imgObj);
            }
        })
    }

}