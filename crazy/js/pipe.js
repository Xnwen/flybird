/**
 * Created by ���� on 2016/10/18.
 */
(function (w) {
    /*
     * constructor {Pipe} �ܵ�
     * param {options} ���еĲ���
     * param {options.ctx} ��ͼ������
     * param {options.downImg} �ڳ��µĹܵ�
     * param {options.upImg} �ڳ��ϵĹܵ�
     * param {options.x} �ܵ�����ĺ�����
     * param {options.downy } �ڳ��µĹܵ���������
     * param {options.upy } �ڳ��ϵĹܵ���������
     * param {options.pipeSpace } ���¹ܵ��ļ��
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
        //���ܵ�����
        _drawPath:function(){
            this.ctx.rect(this.x,this.downy,this.width,this.height);
            this.ctx.rect(this.x,this.upy,this.width,this.height);
        },
        _initY: function () {
            //�Ϲܵ��ĸ߶�
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