/**
 * Created by ���� on 2016/10/18.
 */
/*
 * constructor { getImage } ����ͼƬ��Դ
 * param { imgUrl��Object} ͼƬ��·��
 * param { callback:Function} �ص�
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
        //��ͼƬ��Դ���ڶ�����
        imgObj[key]=img;
        img.addEventListener("load",function(){
            if(++imgLoadedNumber >= len){
                callback(imgObj);
            }
        })
    }

}