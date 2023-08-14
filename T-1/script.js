$(document).ready(function(){
    let tabmenu = $(".tabmenu > ul > li");
    let tabcon = $(".tabcont > div");
    tabcon.hide().eq(0).show();

    tabmenu.click(function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        // 내가 클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
        tabcon.eq(index).show().siblings().hide();
    });
});