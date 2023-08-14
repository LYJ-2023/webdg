$(document).ready(function(){
    let slideImg = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        slideImg++;
        $(".sliderWrap").animate({marginLeft: -100 * slideImg + "%"}, 600)

        if(slideImg == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft: 0}, 0)
                slideImg = 0;
            }, 700);
        };
    }, 3000);
});