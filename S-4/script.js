$(document).ready(function(){
    let slideImg = 0;

    setInterval(function(){
        let nextImg = (slideImg + 1) % 3;

        $(".slider").eq(slideImg).fadeOut(1200)
        $(".slider").eq(nextImg).fadeIn(1200)

        slideImg++;
    }, 3000);
});