/**
 * Created by 123 on 2017/8/16.
 */
(function(){
    //加载头部 必须先引进jq才能用.load  里面要看路径
    $(function(){
        $("#header").load("header.html")
    });
})();
//banner开始
(function(){
    var index=0;
    var k=0;
    var len=$(".banner ul li").length,
        prev=$(".banner .click .prev"),
        next=$(".banner .click .next"),
        ban=$(".banner"),
        dot=$(".banner .click .center-center img");
//点点点击
    dot.click(function(){
        index=$(this).index();
        comm();
    });
//左箭头点击
    prev.hover(function(){
        $(this).find("img").attr("src","images/prev_jiantou_hover.png");
        next.find("img").attr("src","images/next_jiantou.png");
    }).click(function(){
        index--;
        if(index<0){
            index=len-1;
        }
        comm();
    });
//定义公用的两句代码 换图片及点点的颜色
    function comm(){
        $(".banner ul li").fadeOut(0).eq(index).fadeIn();
        dot.attr("src","images/next&prev_others.png").eq(index).attr("src","images/next&prev_now.png")
    }
//点击右箭头
    next.hover(function(){
        $(this).find("img").attr("src","images/next_jiantou_hover.png");
        prev.find("img").attr("src","images/prev_jiantou.png");
    }).click(function(){
        right();
    });
//定义右点击及自动播放的右向通用
    function right(){
        index++;
        if(index>len-1){
            index=0;
        }
        comm();
    }
//定时器
    var timer=setInterval(right,2000);
    ban.hover(function(){
        clearInterval(timer)
    },function(){
        timer=setInterval(right,2000);
    });
})();



//main1
(function(){
    var line=$(".main1 .main1-bot .main1-bot-lt .line"),
        content=$(".main1 .main1-bot-rt .content1"),
        len=content.length,
        img=$(".main1 .main1-bot-rt .content1 .img1"),
        rt=$(".main1 .main1-bot-rt .content1 .content-rt"),
        index=0,
        m=0,
        prev=$(".main1 .main1-bot .main1-bot-rt .content-main3 .prev"),
        next=$(".main1 .main1-bot .main1-bot-rt .content-main3 .next");
//main1左侧 点击小圆点
    line.click(function(){
        m=index; /*获取点击之前的索引值*/
        index=$(this).index(); /*获取当前的索引值*/
        content.hide().eq(index).show();
        $(this).addClass("now").siblings().removeClass("now");
        if(m<index){  /*现在的值大 就从右侧出*/
          mm("fadeInRight")
        }else{ /*否则 现在的值小 就从左侧出*/
            mm("fadeInLeft")
        }
    });
    //公共的从左右出 只改形参实参
    function mm(ltrt){
        //不调用的时候括号内是形参 只占位不执行
        //调用的时候括号内是实参 就是实际参与执行的元素
        img.removeClass("animated fadeInRight fadeInLeft").eq(index).addClass("animated "+ltrt);
        rt.removeClass("animated fadeInRight fadeInLeft").eq(index).addClass("animated "+ltrt);
        //注意空格
    }
//main1左右点击
    prev.click(function(){
        index--;
        if(index<0){
            index=len-1;
        }
        content.hide().eq(index).show();
        mm("fadeInLeft");  /*左点击 从左侧出*/
        line.removeClass("now").eq(index).addClass("now"); /*给对应的圆点加上*/
           });
    next.click(function(){
        index++;
        if(index>len-1){
            index=0;
        }
        content.hide().eq(index).show();
        mm("fadeInRight"); /*右点击 从右侧出*/
        line.removeClass("now").eq(index).addClass("now"); /*给对应的圆点加上*/
    })
})();



//main3开始
(function(){
    var icon=$(".main3 .main3-bot ul li .icon"),
        ol=$(".main3 .main3-bot ul li ol"),
        that=null;

    $(".main3 .main3-bot ul li .centering").hover(function(){
        $(this).addClass("animated tada")
    },function(){
        $(this).removeClass("animated tada")
    });
    icon.hover(function(){
        $(this).addClass("animated tada")
    },function(){
        $(this).removeClass("animated tada")
    });
    icon.click(function(){
        $(this).toggleClass("icon1");
        that=$(this);
        com();
    });
    $(".main3 .main3-bot ul li .box .centering").click(function(){
        that=$(this);
        com();
        $(this).siblings(".icon").toggleClass("icon1");
    });
    function com(){
        //$(this)会指向function
        that.parent().siblings("ol").slideToggle();
        that.closest("li").siblings().find("ol").slideUp();
        that.closest("li").siblings().find(".icon").removeClass("icon1");
    }
})();

//main4团队介绍开始
(function () {
    var len=$(".main4 .main4-bot ul li").length,
        wid=$(".main4 .main4-bot ul li").width(),
        ul=$(".main4 .main4-bot ul"),
        prev=$(".main4 .main4-bot .click .prev"),
        next=$(".main4 .main4-bot .click .next"),
        timer=setInterval(right,2000),
        dot=$(".main4 .main4-bot .click .center .center-center span"),
        index= 0;/*ul li索引*/
    //右点击 轮播图切换
    function right(){
        ul.animate({left:-wid},1000,"backIn",function(){
            ul.append($(".main4 .main4-bot ul li:first-child")); /*把ul的第一个孩子添加到ul的最后面*/
            ul.css({left:0})
        });
        index++;
        if(index>len-1){
            index=0;
        }
        dot.removeClass("blue").eq(index).addClass("blue")
    }
    next.click(function(){
       right()
    });
    prev.click(function(){
        index--;
        if(index<0){
            index=len-1
        }
        dot.removeClass("blue").eq(index).addClass("blue");
        ul.prepend($(".main4 .main4-bot ul li:last-child"));/*把ul的最后一个孩子添加到ul的最前面*/
        ul.animate({left:-wid},0,function(){ /*时间要为0 立刻变成 否则会有动画效果*/
            ul.animate({left:0},1000,"backOut")
        })
    });

    //定时器
    $(".main4 .main4-bot").hover(function(){
        clearInterval(timer)
    },function(){
        timer=setInterval(right,2000)
    })
})();

//main6开始
(function(){
    var input=$(".main6 .main6-bot input"),
        text=$(".main6 .main6-bot textarea");

    input.focus(function(){
        $(this).parent().addClass("input1");
    });
    text.focus(function(){
        $(this).parent().addClass("input1");
    });
    input.blur(function(){
        $(this).parent().removeClass("input1");
    });
    text.blur(function(){
        $(this).parent().removeClass("input1");
    })
})();
//footer开始
(function(){
    $("#footer").load("footer.html")
})();