console.log(navigator.userAgent);/*来检测浏览器是否出现了名字*/

//aaa.indexOf("bbb");查看bbb是否存在与aaa中 如果存在就返回bbb的索引
  //如果不存在 就返回-1
$(".footer .music span").click(function(){
    var index=$(this).index();
    if(navigator.userAgent.indexOf("Chrome")>-1){
        //大于-1就是谷歌浏览器
        $(".footer").append('<embed autoplay="true" class="mus" hidden="true" loop="false" src="music/sound0'+index+'.mp3"/>')
    }else if(navigator.userAgent.indexOf("Firefox")>-1){
        //不是谷歌 是火狐
        $(".footer").append('<object width="0" height="0" class="mus" data="music/sound0'+index+'.mp3" type="">' +
            '<param name="src" value="music/sound0'+index+'.mp3"/>' +
            '<param name="autoplay" value="1"/>' +
            '</object>')
    }else{
        //既不是谷歌 也不是火狐 就是ie
        $("body").append('<bgsound autoplay="true" class="mus" hidden="true" loop="false" src="music/sound0'+index+'.mp3"></bgsound>')
    }
    setTimeout(function(){
        $(".mus").eq(0).remove();
    },2000)
});