$(document).ready(function() {
    var box=$(".section");
    $('#fullpage').fullpage({
        'navigation': true,
        onLeave: function(index, nextIndex, direction){
            box.eq(nextIndex-1).find(".totop").css({         //下一张
                transform: "translate(0,0)"
            });
            box.eq(nextIndex-1).find(".tomintop").css({
                transform: "translate(0,0)"               
            })
            if(nextIndex==8){
                $(".toleft").css({ transform: "translate(0,0)"})
                $(".toright").css({ transform: "translate(0,0)"})
            }
        }
    });

// 第二页轮播图
    var cw=document.documentElement.clientWidth;
    var sec2content=$(".sec2-content")
    $(".sec2-btn-right").click(function(){
        sec2content.css("marginLeft",-cw*0.9)
    })
    $(".sec2-btn-left").click(function(){
        sec2content.css("marginLeft",0)        
    })

    var servebox=$(".servebox")
    $(".sec3-right").click(function(){
        servebox.css("marginLeft",-cw*0.8)
    })
    $(".sec3-left").click(function(){
        servebox.css("marginLeft",0)
    })

// 清除浏览器默认行为
    document.onmousedown=function(e){
        e.preventDefault()
        document.onmousemove=function(e){
            e.preventDefault()
        }
    }
});