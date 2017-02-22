/**
 * Created by 晓娜 on 2016/10/16.
 */
(function(w){
    /*
    * constructor {Land} 大地构造函数
    * params {options} 所有的参数
    * */
    function Land(options){
        this.ctx = options.ctx;
        this.img = options.img;
        this.x = options.x || 0;
        this.y = this.ctx.canvas.height -this.img.height;
        //设置背景移动的速度
        this.speed = 1;
    }
    util.extend(Land.prototype,{
        draw: function (){
            this.ctx.drawImage(this.img,this.x,this.y);
        },
        update:function(){
            this.x -= this.speed;
            if(this.x < -this.img.width){
                //this.x = this.img.width; 不能采用该方法，会出现缝隙
                this.x += 4* this.img.width;
            }
        }
    })
    w.Land = function(options){
        return new Land(options);
    };
}(window));