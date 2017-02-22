/**
 * Created by 晓娜 on 2016/10/18.
 */
/*
 * constructor { getCanvasContext } 绘制上下文环境
 * param { containerId : string} 存放画布的容器ID
 * param { width ：number} 画布的宽
 * param { height ：number} 画布的高
 * */
function getCanvasContext(containerId,width,height){
    var canvas = document.createElement("canvas");
    width && (canvas.width = width);
    height && (canvas.height = height);
    containerId && (document.getElementById(containerId).appendChild(canvas));
    return canvas.getContext("2d");

}