$(document).ready(function() {
    $('.nav_link').on('click', function(e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $('.nav_link').removeClass('active');
            $(this).addClass('active');
        }
    });
    $(window).scroll(() => {

        if ($('.header').offset().top > 100) {
            $('.header').addClass('active');
        } else $('.header').removeClass('active');

    });
});