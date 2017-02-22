/**
 * Created by ���� on 2016/10/16.
 */
(function(w){
    /*
    * constructor {Sky} ��չ��캯��
    * params {options} ���еĲ���
    * */
    function Sky(options){
        this.ctx = options.ctx;
        this.img = options.img;
        this.x = options.x || 0;
        this.y = 0;
        //���ñ����ƶ����ٶ�
        this.speed = 1;
    }
    util.extend(Sky.prototype,{
        draw: function (){
            this.ctx.drawImage(this.img,this.x,this.y);
        },
        update:function(){
            this.x -= this.speed;
            if(this.x < -this.img.width){
                //this.x = this.img.width; ���ܲ��ø÷���������ַ�϶
                this.x += 2* this.img.width;
            }
        }
    })
    //������������¶����
    w.Sky = function(options){
        return new Sky(options);
    };
}(window));