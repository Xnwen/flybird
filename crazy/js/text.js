/**
 * Created by 晓娜 on 2016/10/18.
 */
(function(w){
    function Text(options){
        this.ctx = options.ctx;
        this.x = options.x;
        this.y = options.y;
        this.font = options.font || "20px 微软雅黑";
        this.textAlign = options.textAlign || "center";
        this.textBaseline = options.textBaseline || "middele";
        this.fillStyle = options.fillStyle;
        this.startTime = options.startTime;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;

    }
    Text.prototype = {
        constructor: Text,
        draw:function(){
            this.ctx.font = this.font;
            this.ctx.textAlign = this.textAlign;
            this.ctx.textBaseline = this.textBaseline;
            this.ctx.fillStyle = this.fillStyle;
            this.ctx.fillText(this.text,this.x,this.y);
        },
        update:function(){
            var gameRunTime = Date.now() - this.startTime;

            // 把毫秒时间转换为可读性比较强的文本
            this.hours = Math.floor(gameRunTime / (1000 * 60 * 60));
            this.minutes = Math.floor(gameRunTime % (1000 * 60 * 60) / (1000 * 60));
            this.seconds = Math.floor(gameRunTime % (1000 * 60) / 1000);
            this.text ="坚持了"+this.hours+"小时"+this.minutes+"分"+this.seconds+"秒";

        }
    }
    w.Text = function(options){
        return new Text(options);
    };
}(window));