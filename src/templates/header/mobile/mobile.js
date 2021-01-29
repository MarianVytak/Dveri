const body = $('body');
const mobileBurger = $('.header-mobile__burger');
const mobileMenu = $('.mobile-menu');
mobileBurger.on('click', function (e){
    e.preventDefault();
    mobileMenu.fadeToggle();
    $(this).toggleClass('active');
});
mobileMenu.click( function(e){
    if ( $(e.target).closest('.modal__content').length ) {
        return;
    }
    body.removeClass('overflow-hidden');
    mobileMenu.fadeOut();
    mobileBurger.removeClass('active');
});