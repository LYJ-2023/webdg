$(document).ready(function(){
    var slideImg = 0;
    $(".slideWrap").append($(".slider").first().clone());

    setInterval(function(){
        slideImg++;
        $(".slideWrap").animate({marginTop: -slideImg * 300 + "px"}, 600);

        if(slideImg == 3){
            setTimeout(function(){
                $(".slideWrap").animate({marginTop: 0}, 0);
                slideImg = 0;
            }, 700);
        }
    }, 3000);
});