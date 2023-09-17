jQuery(document).ready(function($){
    $(window).scroll(function() {
        scrollPosition = $(this).scrollTop();
        if (scrollPosition >= 100) {
            $('nav.mobile_menu').addClass('extend-menu');
            $('.side_menu_button > a').addClass('fixed-header-on'); 
        } else {
            $('nav.mobile_menu').removeClass('extend-menu');
            $('.side_menu_button > a').removeClass('fixed-header-on');
     }
    });


});
jQuery(document).ready(function($){
    $('<div id="icon-for-houzz"><img src="/wp-content/uploads/2017/01/footer_houzz.png" alt="houzz icon" /></div>').prependTo('nav.popup_menu ul li.houzz-icon a '
        );
    $('<div id="icon-for-houzz"><img src="/wp-content/uploads/2017/01/footer_bigass.png" alt="big glass logo" /></div>').prependTo('nav.popup_menu ul li.bigglass-icon a '
        ); 
    $( "nav.popup_menu ul li.menu-icons" ).wrapAll( "<div class='popup_menu-icon-container' />");
    $('.menu-icons a').attr('target', '_blank');
});