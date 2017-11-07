/**
 * Created by 曹亚丽 on 2017/9/30.
 */
$(function(){
    var num=1;
    var size=$(".pic li ").size();
    var timer;
    //有名方法
    //定义方法，如果不触发，永远不会有行为。
    function start(){
        timer=setInterval(function(){//匿名方法
            if (num==size){
                num=0;
            }
            $(".pic li").eq(num).show().siblings().hide();
            $(".pager li").eq(num).css("background-color","#713998").siblings().css("background-color","#fff");
            num++;
        },2000)
    }
    start();//调用方法，设置定时器进行图片的轮播。


    //圆点的hover事件
    $(".pager li").hover(function(){
        clearInterval(timer)
        $(this).css("background-color","#713998").siblings().css("background-color","#fff");
        num = $(this).index();
        $(".pic li").eq(num).show().siblings().hide();
        num++;
    },start);
    //图片的hover事件
    $(".pic li").hover(function(){
        clearInterval(timer);
        num=$(this).index();
        $(".pager li").eq().css("background-color","#713998").siblings().css("background-color","#fff");
        num++;
        $(".left,.right").show()
    },start)
    左边箭头的点击事件
    $(".left").click(function(){
        clearInterval(timer);
        num--;
        //判断一下，是否已经到第一张图
        if(num<0){
            num=size-1;
        }
        $(".pic li").eq(num).show().siblings().hide();
        $(".pager li").eq(num).css("background-color","#713998").siblings().css("background-color","#fff");
    });
    //右边箭头的点击事件
    $(".right").click(function(){
        clearInterval(timer);
        num++;
        if(num==size){
            num=0;
        }
        $(".pic li").eq(num).show().siblings().hide();
        $(".pager li").eq(num).css("background-color","#713998").siblings().css("background-color","#fff");
    });
    //给整个div添加hover事件
    $(".banner").hover(function(){
        $(".left,.right").show();
    },function(){
        $(".left,.right").hide()
    })
});