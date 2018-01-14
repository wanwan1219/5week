/**
 * Created by 123 on 2017/8/14.
 */
$(".banner .list ul li").hover(function(){
    $(this).find("ol").show()
},function(){
    $(this).find("ol").hide();
});
var index=0;
var k=0;
var len=$(".banner .banner-lun ul li").length;
var wid=$(".banner .banner-lun ul li").width();
var fa=true;
var attrC=["#004797","#516FF9","#477978","#FDE4E1","#D4CFC5","#B7A78F","#D4E1F6","#B01120","#004797"];
var m=0;
function right(){
    if(fa==true){
        fa=false;
        index++;
        if(index>len-1){
            index=1;
            $(".banner .banner-lun ul").css({left:0});
        }
        $(".banner .banner-lun ul").stop().animate({left:-wid*index},900,function(){
            fa=true;
        });
        k++;
        if(k>len-2){
            k=0;
        }
        $(".banner .banner-lun ol li").removeClass("col").eq(k).addClass("col");
        $(".banner").css({background:attrC[index]},900);
    }
}

$(".banner .click .next").click(function(){
    right();
});
$(".banner .click .prev").click(function(){
    if(fa==true){
        fa=false;
        index--;
        if(index<0){
            index=len-2;
            $(".banner .banner-lun ul").css({left:-(index+1)*wid});
        }
        $(".banner .banner-lun ul").stop().animate({left:-wid*index},900,function(){
            fa=true;
        });
        k--;
        if(k<0){
            k=len-2;
        }
        $(".banner .banner-lun ol li").removeClass("col").eq(k).addClass("col");
        $(".banner").css({background:attrC[index]},900);
    }
});
$(".banner .banner-lun ol li").hover(function(){
    k=$(this).index();
    index=$(this).index();
    $(".banner .banner-lun ol li").removeClass("col").eq(k).addClass("col");
    $(".banner .banner-lun ul").stop().animate({left:-wid*index},900);
    $(".banner").css({background:attrC[index]},900);
});
var timer=setInterval(right,1000);
$(".banner .banner-lun").hover(function(){
    clearInterval(timer);
},function (){
    timer=setInterval(right,1000)
});
