$("a[href^='#']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});

//$(document).bind("contextmenu",function(e) { 
//    e.preventDefault();
//});
