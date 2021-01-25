$(document).on('scroll', function(){
    let documentScroll = $(this).scrollTop();
    if (documentScroll >= 124) {
        $('.navigation').addClass('fixed');
        $('.header').css('paddingTop', 50);
    } else {
        $('.navigation').removeClass('fixed');
        $('.header').removeAttr('style');
    }
});