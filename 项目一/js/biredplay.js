/**
 * Created by 123 on 2017/8/24.
 */
(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html")
})();
(function(){
    $(".main .list span").click(function(){
        $(".list").animate({width:110,backgroundPositionX:"-1000px"},500,function(){
            $(".list").animate({width:"1100px",backgroundPositionX:"0px"},1000,"easeOutStrong")
        });
    });
    var index=0;
    $(".main .inner .list-more").click(function(){
        index++;
        if(index<3){
            ajaj()
        }/*else{
            $(".main .inner .list-more").css({display:"none"})
        }*/
    });

    ajaj();
    function ajaj(){
        //new 实例化XMLHttpRequest对象
        //open 设置请求方式 接口 是否异步
        //send 设置请求主体 传递参数



        /*01.js  的ajax*/
        //1. 实例化XMLHttpRequest对象  new一个
        var xhr=new XMLHttpRequest();

        //open里面 三个参数

        //1.请求方式  get  post
        //get  方式主要用于  从后台去要数据
        //post  主要用于出货  给后台数据时使用。

        //get 方式会把我们的数据，暴露在url里面
        //get  有大小的限制

        //post  相对比较安全
        //2.参数是接口  url
        //后台会直接给我们，然后直接拿过来用就可以了
        //3.是否异步 默认异步 一般不用写
        //异步是非阻塞。
        xhr.open("get","js/listData.json");
        //  想要什么的时候  ，传递过去的方式是不一样

        //get方式用url传递参数 所以在send里面直接null
        //post方式 在send里面传递参数

        //get  要告诉后台想要hsx 通过url去告诉后台
        //post  send去告诉后台
        xhr.send(null);
        //get的时候也必须有send
        /*
         xhr.open("post","js/listData.json");
         xhr.send("name=hsx")
         */
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                //表示 请求正式完成
                if(xhr.status==200){
                    //服务器做出正确响应 并找到了我们需要的数据
                    var list=JSON.parse(xhr.responseText);
                    //console.log(list[0].data.list);
                    //接收 responseText
                    if(index==0){
                        $(".main .inner .list-con").html("");/*清空里面的内容*/
                    }
                    var data=list[index].data.list;
                    for(var i=0;i<data.length;i++){
                        var item=$("#item").html().replace("$img$",data[i].coverImg).replace("$title$",data[i].title).replace("$id$",data[i].sysId);//获取#item内部的元素
                        $(".main .inner .list-con").append(item);
                    }
                }
            }
        }
    }



    //jq里面的ajax
    /*
    $.ajax({
        type:"GET",/!*请求的类型  默认是get 不写也可以  如果用post请求 用send传递*!/
        //data:==send /!*请求的主体*!/
        url:"js/listData.json",/!*接口*!/
        success:function(e){ /!*请求成功*!/
            console.log(e);
        }
    });
    */




    //事件委托
    //js动态添加的元素 因为是在js执行后添加 所以在最初dom加载的时候没有动态添加的元素，所以js添加的事件没有绑定上，所以需要把时间委托给他的父元素
    //触发的时候 他父元素在重新去加载里面的dom元素
    $(".list-con").delegate(".con1","click",function(){
        window.open("article.html#xiaoniaoNews"+$(this).attr("sysId"));
    })

})();
