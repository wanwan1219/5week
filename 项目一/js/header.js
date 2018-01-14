/**
 * Created by 123 on 2017/8/16.
 */
$(".header .header-rt ul li").click(function(){
    var index=$(this).index();
    $(".header .header-rt ul li .dian").hide().eq(index).show();
});
$(".header .header-rt ul li").hover(function(){
    $(this).find("ol").stop().slideDown(600,'elasticOut');
},function(){
    $(this).find("ol").stop().slideUp()
});
$(".header .header-rt ul li ol li").hover(function(){
    $(this).css({background:"#329ADC"});
    $(this).find("a").stop().animate({marginLeft:45},400);
    $(this).find("img").show()
},function(){
    $(this).css({background:"#36264A"});
    $(this).find("a").stop().animate({marginLeft:30},400);
    $(this).find("img").hide()
});
$();