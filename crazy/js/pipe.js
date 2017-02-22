/**
 * Created by 晓娜 on 2016/10/18.
 */
(function (w) {
    /*
     * constructor {Pipe} 管道
     * param {options} 所有的参数
     * param {options.ctx} 绘图上下文
     * param {options.downImg} 口朝下的管道
     * param {options.upImg} 口朝上的管道
     * param {options.x} 管道共享的横坐标
     * param {options.downy } 口朝下的管道的纵坐标
     * param {options.upy } 口朝上的管道的纵坐标
     * param {options.pipeSpace } 上下管道的间距
     * */
    function Pipe(options) {
        this.ctx = options.ctx;
        this.downImg = options.downImg;
        this.upImg = options.upImg;
        this.width = this.downImg.width;
        this.height = this.downImg.height;
        this.x = options.x;
        this.pipeSpace = options.pipeSpace;
        this.speed = 1;
        this._initY();
    }

    util.extend(Pipe.prototype, {
        draw: function () {
            this.ctx.drawImage(this.downImg, this.x, this.downy);
            this.ctx.drawImage(this.upImg, this.x, this.upy);
            this._drawPath();
        },
        //画管道矩形
        _drawPath:function(){
            this.ctx.rect(this.x,this.downy,this.width,this.height);
            this.ctx.rect(this.x,this.upy,this.width,this.height);
        },
        _initY: function () {
            //上管道的高度
            var downHeight = Math.floor(Math.random() * 200 + 30);
            this.downy = downHeight - this.height;
            this.upy = downHeight + this.pipeSpace;

        },
        update: function () {
            this.x -= this.speed;
            if (this.x < -this.width) {
                this.x += this.width * 3 * 6;
                this._initY();
            }
        }
    })
    w.Pipe = function (options) {
        return new Pipe(options);
    }
}(window));