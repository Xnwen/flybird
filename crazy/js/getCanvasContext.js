/**
 * Created by ���� on 2016/10/18.
 */
/*
 * constructor { getCanvasContext } ���������Ļ���
 * param { containerId : string} ��Ż���������ID
 * param { width ��number} �����Ŀ�
 * param { height ��number} �����ĸ�
 * */
function getCanvasContext(containerId,width,height){
    var canvas = document.createElement("canvas");
    width && (canvas.width = width);
    height && (canvas.height = height);
    containerId && (document.getElementById(containerId).appendChild(canvas));
    return canvas.getContext("2d");

}