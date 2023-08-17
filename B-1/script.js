$(document).ready(function(){
    //nav
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li").find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li").find(".submenu").stop().slideUp();
    });

    //slide
    let slideImg = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        slideImg++;
        $(".sliderWrap").animate({marginLeft: -slideImg * 100 + "%"}, 600);

        if(slideImg == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft: 0}, 0);
                slideImg = 0;
            }, 700)
        }
    }, 3000);

    //tab
    let tabbtn = $(".tabbtn > ul > li");
    let tabcon = $(".tabcon > div");
    tabcon.hide().eq(0).show();

    tabbtn.click(function(){
        const index = $(this).index();
        $(this).addClass("click").siblings().removeClass("click");

        tabcon.eq(index).show().siblings().hide();
    });

    //popup
    $(".popup").click(function(){
        $(".popview").show();
    });
    $(".popclose").click(function(){
        $(".popview").hide();
    });
});