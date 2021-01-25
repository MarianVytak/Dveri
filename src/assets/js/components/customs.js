$(function () {

    'use strict';

    $('.js-toggle').on('click', function (e){
        e.preventDefault();
        $(this).toggleClass('active');
    });


    // Modal
    const body = $('body');
    const modal = $('.modal');
    const modalLink = $('.js-modal-link');
    const modalClose = $('.modal__close');
    modalLink.on('click', function (e){
        e.preventDefault();
        let thisModal = $(this).attr('href');
        body.addClass('overflow-hidden');
        $(thisModal).fadeIn();
    });
    modalClose.on('click', function (e){
        e.preventDefault();
        body.removeClass('overflow-hidden');
        modal.fadeOut();
    });
    modal.click( function(e){
        if ( $(e.target).closest('.modal__content').length ) {
            return;
        }
        body.removeClass('overflow-hidden');
        modal.fadeOut();
    });


    // Alert
    const alertLink = $('.js-alert-link');
    const alertClose = $('.alert__close');
    alertLink.on('click', function (e){
        e.preventDefault();
        let thisAlert = $(this).attr('href');
        $(thisAlert).fadeIn();
        function alertFade() {
            $(thisAlert).fadeOut();
        }
        setTimeout(alertFade, 5000);
    });
    alertClose.on('click', function (e){
        e.preventDefault();
        let thisAlert = $(this).attr('href');
        $(thisAlert).fadeOut();
    });

});