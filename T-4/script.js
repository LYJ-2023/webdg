$(document).ready(function(){
    let tabbtn = $(".tabbtn > ul > li")
    let tabcon = $(".tabcon > div")
    tabcon.hide().eq(0).show();

    tabbtn.click(function(){
        const index = $(this).index();

        $(this).addClass("click").siblings().removeClass("click");
        tabcon.eq(index).show().siblings().hide();
    });
});