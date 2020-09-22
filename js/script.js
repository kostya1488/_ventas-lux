$(document).ready(function() {
    // $('.nav_link').on('click', function(e) {
    //     e.preventDefault();
    //     if (!$(this).hasClass('active')) {
    //         $('.nav_link').removeClass('active');
    //         $(this).addClass('active');
    //     }
    // });
    // $(window).scroll(() => {

    //     if ($('.header').offset().top > 100) {
    //         $('.header').addClass('active');
    //     } else $('.header').removeClass('active');

    // });

    // smooth scrolling
    $(".nav_link").on("click", function(e) {
        e.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 900);
    });

    // disable page reload

    $('#btn').click(function(e) {
        e.preventDefault();
        return false;
    });
});