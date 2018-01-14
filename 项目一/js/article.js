/**
 * Created by 000 on 2017/9/4.
 */
(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $(".content_wrap .title_list .pen").click(function(){
        $(".content_wrap .title_list").animate({width:110,backgroundPositionX:"-1000px"},500,function(){
            $(".content_wrap .title_list").animate({width:780,backgroundPositionX:"-320px"},1000,"easeOutStrong")
        })
    });


})();
(function(){
    var k=window.location.hash.substring(1);
    console.log(k);
    if(k){
        var xhr=new  XMLHttpRequest();
        xhr.open("get","js/articleData.json");
        xhr.send(null);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    var list=JSON.parse(xhr.responseText);
                    $(".article_content .img_wrap img").attr("src",list[k].data.coverImg);
                    $(".content_wrap .title_big").text(list[k].data.typeTitle);
                    $(".content_wrap h2").text(list[k].data.typeEntitle);
                    $(".content_wrap .title_list>p").text(list[k].data.title);
                }
            }
        }

    }
})();
