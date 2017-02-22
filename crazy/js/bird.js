/**
 * Created by ���� on 2016/10/16.
 */
(function(w){
    /*
    * constructor {Bird} С���캯��
    * param {options} ���еĲ���
    * param {options.ctx} ��ͼ������
    * param {options.img} ��ͼ�����ͼ����Դ
    * param {options.x} ����ͼ��ĺ�����
    * param {options.y} ����ͼ���������
    * param {options.widthMaxFrame } ͼ���ж�����
    * param {options.heightMaxFrame } ͼ���ж�����
    * */
    function Bird(options){

        this.ctx = options.ctx;
        this.img = options.img;
        this.x = options.x || 10;
        this.y = options.y || 10;
        //С��ĵ�ǰ֡��Ĭ��Ϊ0
        this.frame = 0;
        //С��������ٶ�
        this.speed = 1;
        this.speedPlus = 0.05;
        //����û�û�ж���ͼƬ�ж����ж����У�Ĭ��Ϊ1
        this.widthMaxFrame = options.widthMaxFrame || 1;
        this.heightMaxFrame = options.heightMaxFrame || 1;
        //ͼ��Ĭ�ϵĿ��
        this.defaultWidth = this.img.width / this.widthMaxFrame;
        this.defaultHeight = this.img.height / this.heightMaxFrame;
        //ͼ��Ŀ�ߣ��û��Լ�û�ж�����ʹ��Ĭ�ϵĿ��
        this.width = options.width ||  this.defaultWidth;
        this.height = options.height ||  this.defaultHeight;
        this._bind();

    }
    //ԭ����չ����
    util.extend(Bird.prototype,{
        //����С��
        draw:function(){
            this.ctx.drawImage(this.img,
                this.defaultWidth * this.frame,0,this.defaultWidth,this.defaultHeight,
                this.x,this.y,this.width,this.height);
        },
        //��������
        update:function(){
            this.frame = ++this.frame % this.widthMaxFrame;
            this.y += this.speed;
            this.speed += this.speedPlus;
        },
        //���¼�
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