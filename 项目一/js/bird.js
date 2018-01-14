/**
 * Created by 123 on 2017/8/23.
 */
(function(){
    var hei=$(window).height();
    $(".welcome_wrap").css({height:hei});
    //    点击两下 界面收起
    var cli=0;
    $(".welcome_wrap").click(function(){
        /*方法1.
         cli++;
         if(cli==2){
         $(".welcome_wrap").stop().slideUp();
         }*/

        /*方法2*/
        if(cli==0){
            cli++;
        }else {
            $(".welcome_wrap").stop().slideUp();
        }

    });
    setTimeout(function(){
        $(".welcome_wrap").slideUp()
},4000);
    setTimeout(function(){
        $(".welcome_wrap .welcome_content").stop().animate({top:"40%"},600,function(){
            $(".welcome_wrap .welcome_content .welcome-animate").each(function(i){
                setTimeout(function(){
                    $(".welcome_wrap .welcome_content .welcome-animate").eq(i).show().addClass("animated fadeInUp");
                },i*200)
            })
        });
    },2000)


})();


(function(){
    var hei=$(window).height()-50,
        index= 0,
        lis=$(".nav_wrap .nav ul li"),
        con=$(".content_wrap .contents .content"),
        len=con.length;
    $(".contents_wrap,.contents,.content").css({height:hei});
    lis.hover(function(){
        $(this).addClass("dot").siblings().removeClass("dot")
    },function(){
        $(this).removeClass("dot");
    });
    //点击头部的li跳转到对应的页面 并且添加小圆点
    lis.click(function(){
        index=$(this).index()+1;
        if(index==5) {
            index=4;
        }
        if(index<6){
            animates();
            console.log(index);
        }
    });
    var fa=1;
    function scrDown(){
        if(fa==1){
            fa=0;
            index++;
            if(index>len-1){
                index=len-1;
            }
            animates();
        }
    }
    function scrUp(){
        if(fa==1){
            fa=0;
            index--;
            if(index<0){
                index=0;
            }
            animates();
        }
    }
    function animates(){
        $(".content_wrap .contents").animate({top:-(index)*hei},500,function(){
            fa=1;
        });
        if (index==0){

        }else if(index==4){
            lis.removeClass("col").eq(index-1).addClass("col");
            lis.eq(index).addClass("col");
        }else{
            lis.removeClass("col").eq(index-1).addClass("col");
        }

    }
    //滚轮事件
    //火狐的滚轮事件：DOMMouseScroll
    //判断上下用：detail

    //ie和谷歌的滚轮事件：mousewheel  on是绑定方式
    //ie的678 没有addEventListener事件监听 会直接报错 所以用window 和 document来获取 加一个if判断
    //判断向上向下用：wheel.delta;

    var scr= function (e) {
        e=e||window.event;/*ie的低版本没有e，他只有window.event 用来兼容ie低版本 ie把状态值都存在了window.event里面*/
        if(e.wheelDelta){
            console.log(e.wheelDelta);
            /*向上滑是120
            * 向下滑是-120
            * */
            if(e.wheelDelta>0){
                //alert("向上")
                scrUp();
            }else{
                //alert("向下")
                scrDown();
            }
        }else{
            console.log(e.detail);
            /*向上滑是-3
            * 向下滑是3
            * */
            if(e.detail<0){
                //alert("向上")
                scrUp();
            }else{
                //alert("向下")
                scrDown();
            }
        }
    };

    if(document.addEventListener){
        document.addEventListener("DOMMouseScroll",scr)
    }
    window.onmousewheel=document.onmousewheel=scr;


    //点击content1 do-next时跳到第二张
    $(".content_wrap .content1 .do-next").click(function(){
        $(".content_wrap .contents").animate({top:-1*hei},500);
        lis.removeClass("col").eq(1).addClass("col");
    })
})();
(function(){
    var gss=$(".content_wrap .content2 .gaishu .gaishu1"),
        wid=gss.width(),
        len=gss.length,
        index= 0,
        lt=$(".content_wrap .content2 .click-lt"),
        rt=$(".content_wrap .content2 .click-rt");
    //gss.css({width:wid});

    lt.click(function(){
        index--;
        if(index<0){
            index=0
        }
        gss.parent().animate({left:-wid*index});
        //if(index=0){
        //    lt.css({opacity:.5})
        //}
    });
    rt.click(function(){
        index++;
        if(index>len-1){
            index=len-1
        }
        gss.parent().animate({left:-wid*index});
    })
})();
(function(){
    var index= 0,
        wid=$(".content_wrap .content4 .yun-content .yun-box .yun-box-con div").width();


    $(".content_wrap .content4 .yun-content .yun-btm div:first-of-type").click(function(){
        index=$(this).index();
        var that=$(this);
        $(".content_wrap .content4 .yun-content .yun-box .yun-box-con").animate({left:-index*wid});
        $(this).siblings().find("span").removeClass("move-now").animate({left:-78},function(){
            that.find("span").addClass("move-now").animate({left:0});
        });
    });
    $(".content_wrap .content4 .yun-content .yun-btm div:last-of-type").click(function(){
        index=$(this).index();
        var that=$(this);
        $(".content_wrap .content4 .yun-content .yun-box .yun-box-con").animate({left:-index*wid});
        $(this).siblings().find("span").removeClass("move-now").animate({left:78},function(){
            that.find("span").addClass("move-now").animate({left:0});
        });
    })



})();
(function(){
    setInterval(function(){
        $(".content_wrap .contents .content3 .jiazhi-top>div>img:nth-of-type(2)").fadeIn(400).delay(600).fadeOut(400)
        $(".content_wrap .contents .content3 .jiazhi-bot>div>img:nth-of-type(2)").fadeIn(400).delay(600).fadeOut(400)
    },2000)
})();

//(function(){
//    var box=document.getElementsByClassName
//    //事件监听：addEventListener()
//    .box.addEventListener("click",function(){
//        alert(1);
//    });
//    .box.addEventListener("click",function(){
//        alert(1);
//    });
//})();
