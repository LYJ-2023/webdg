$(document).ready(function(){
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().fadeIn(0)
        $("#main").addClass("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut(0)
        $("#main").removeClass("on");
    });
});