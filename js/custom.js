(function($){
    'use strict';

$('.hunt_menu a').on('click', function(){
    $('.hunt_menu a').removeClass('active');
    $(this).addClass('active');
})

$('.hunt_menu_icon i.fa-bars').on('click', function(){
    $('.hunt_menu').animate({left:0});
    $(this).hide();
    $('.hunt_menu_icon i.fa-xmark').show();
})
$('.hunt_menu_icon i.fa-xmark').on('click', function(){
    $('.hunt_menu').animate({left:-250});
    $(this).hide();
    $('.hunt_menu_icon i.fa-bars').show();
})


$(window).scroll(function(){
    var screenSize = $(window).scrollTop();
    if(screenSize > 200 ){
        $('header').addClass('header_active');
    }
    else{
        $('header').removeClass('header_active');
    }
})

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 500){
        $('.hunt_scroll_top i').fadeIn();
    }
    else{
        $('.hunt_scroll_top i').fadeOut();
    }
})

$('.hunt_scroll_top i').on('click', function(){
    $('html').scrollTop({html:0});
});




})(jQuery);