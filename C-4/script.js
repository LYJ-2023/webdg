$(document).ready(function(){
    //nav
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    //slide
    let slideImg = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        slideImg++;

        $(".sliderWrap").animate({marginLeft: - 800 *slideImg + "px"}, 600);

        if(slideImg == 3){
            $(".sliderWrap").animate({marginLeft: 0}, 0);
            slideImg = 0;
        }
    }, 3000);

    //popup
    $(".popup").click(function(){
        $(".popview").show();
    });
    $(".popclose").click(function(){
        $(".popview").hide();
    });
});