/**
 * Created by ���� on 2016/10/16.
 */
(function(w){
    /*
    * constructor {Land} ��ع��캯��
    * params {options} ���еĲ���
    * */
    function Land(options){
        this.ctx = options.ctx;
        this.img = options.img;
        this.x = options.x || 0;
        this.y = this.ctx.canvas.height -this.img.height;
        //���ñ����ƶ����ٶ�
        this.speed = 1;
    }
    util.extend(Land.prototype,{
        draw: function (){
            this.ctx.drawImage(this.img,this.x,this.y);
        },
        update:function(){
            this.x -= this.speed;
            if(this.x < -this.img.width){
                //this.x = this.img.width; ���ܲ��ø÷���������ַ�϶
                this.x += 4* this.img.width;
            }
        }
    })
    w.Land = function(options){
        return new Land(options);
    };
}(window));