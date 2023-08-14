$(document).ready(function(){
    let slideImg = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        slideImg++;
        $(".sliderWrap").animate({marginTop: -100 * slideImg + "vh"}, 600)

        if(slideImg == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginTop: 0}, 0)
                slideImg = 0;
            }, 700);
        }
    }, 3000);
});