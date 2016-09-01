$(function(){
    var maxwidth=120;//设置最多显示的字数
    $(".part article").each(function(){
        if($(this).text().length>maxwidth){
            $(this).parent().append($(this).clone().hide());
            $(this).text($(this).text().substring(0,maxwidth)+"...");//如果字数超过最大字数，超出部分用...代替，
            $(this).parent().append($('<a class="toggle-btn" href="javascript:;" id="toggleBtn"></a>'))//并且在后面加上点击展开的链接；
        };
    })
    $(".part article+a").click(function(){
        var _siblings = $(this).parent().children();
        if($(this).hasClass("active")){
            _siblings.eq(2).hide();
            _siblings.eq(1).show();
            //_siblings.text(_siblings.text().substring(0,maxwidth));
            //_siblings.html(_siblings.html()+"...");//
            $(this).removeClass("active");
        }else{
            _siblings.eq(1).hide();
            _siblings.eq(2).show();
            //_siblings.html(_siblings.data("word"));//
            $(this).addClass("active");
        }
    })
})