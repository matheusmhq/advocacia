$(function(){
    
    $('.buttontop').hide();
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $('.buttontop').fadeIn();
        }else{
            $('.buttontop').fadeOut();
        }
    });
    
    $('.buttontop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
});