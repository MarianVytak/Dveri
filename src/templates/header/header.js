$(function () {

    'use strict';

    // Пошук в шапці сайта
    $('.navigation__search_close').on('click', function (e){
        e.preventDefault();
        $('.navigation__search').fadeOut();
    });
    $('.navigation__search_link').on('click', function (e){
        e.preventDefault();
        $('.navigation__search').fadeIn();
    });

});