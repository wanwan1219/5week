/**
 * Created by 123 on 2017/8/22.
 */
//滚轮滑动 让fixed出现
$(window).scroll(function(){
    $(window).scrollTop();
    if($(window).scrollTop()>500){
        $(".fixed").fadeIn();
    }else{
        $(".fixed").fadeOut(0);
    }
});

$(".fixed .scroll-top").click(function(){
    //让窗口返回页面的顶部
    $(".fixed").animate({bottom:3000},400,function(){
        $(".fixed").css({bottom:160})
    });
    $("html,body").animate({scrollTop:0},500);
});
