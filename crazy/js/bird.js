/**
 * Created by 晓娜 on 2016/10/16.
 */
(function(w){
    /*
    * constructor {Bird} 小鸟构造函数
    * param {options} 所有的参数
    * param {options.ctx} 绘图上下文
    * param {options.img} 绘图所需的图像资源
    * param {options.x} 绘制图像的横坐标
    * param {options.y} 绘制图像的纵坐标
    * param {options.widthMaxFrame } 图像有多少列
    * param {options.heightMaxFrame } 图像有多少行
    * */
    function Bird(options){

        this.ctx = options.ctx;
        this.img = options.img;
        this.x = options.x || 10;
        this.y = options.y || 10;
        //小鸟的当前帧，默认为0
        this.frame = 0;
        //小鸟的下落速度
        this.speed = 1;
        this.speedPlus = 0.05;
        //如果用户没有定义图片有多少列多少行，默认为1
        this.widthMaxFrame = options.widthMaxFrame || 1;
        this.heightMaxFrame = options.heightMaxFrame || 1;
        //图像默认的宽高
        this.defaultWidth = this.img.width / this.widthMaxFrame;
        this.defaultHeight = this.img.height / this.heightMaxFrame;
        //图像的宽高，用户自己没有定义则使用默认的宽高
        this.width = options.width ||  this.defaultWidth;
        this.height = options.height ||  this.defaultHeight;
        this._bind();

    }
    //原型扩展方法
    util.extend(Bird.prototype,{
        //绘制小鸟
        draw:function(){
            this.ctx.drawImage(this.img,
                this.defaultWidth * this.frame,0,this.defaultWidth,this.defaultHeight,
                this.x,this.y,this.width,this.height);
        },
        //更新数据
        update:function(){
            this.frame = ++this.frame % this.widthMaxFrame;
            this.y += this.speed;
            this.speed += this.speedPlus;
        },
        //绑定事件
        _bind:function(){
            var self = this;
            this.ctx.canvas.addEventListener("click",function(){
                self.speed = -2;

            })
        }
    })


    w.Bird = function(options){
        return new Bird(options);
    };;
}(window));