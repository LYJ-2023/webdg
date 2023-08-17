$(document).ready(function(){
    //nav
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li").find(".submenu").stop().slideDown()
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li").find(".submenu").stop().slideUp()
    });

    //slide
    let slideImg = 0;
    $(".slider").hide().first().show();

    setInterval(function(){
        let nextImg = (slideImg + 1) % 3
        $(".slider").eq(slideImg).fadeOut(1200);
        $(".slider").eq(nextImg).fadeIn(1200);

        slideImg = nextImg;
    }, 3000);

    //tab
    let tabbtn = $(".infobtn > a");
    let tabcon = $(".infocon > div");
    tabcon.hide().eq(0).show();

    $(tabbtn).click(function(){
        const index = $(this).index();
        $(this).addClass("click").siblings().removeClass("click");

        $(tabcon).eq(index).show().siblings().hide();
    });

    //popup
    $(".popup").click(function(){
        $(".popview").show();
    });
    $(".popclose").click(function(){
        $(".popview").hide();
    });
});