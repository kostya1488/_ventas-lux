$(document).ready(function() {

    btnUp = $('#button_up_link')

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
        $('.feedback_inner_wrap').addClass('active');
        return false;
    });

    // toggle bg color of menu items
    $('.menu_item').click(function(e) {
        e.preventDefault();
        $('.menu_item').removeClass('active');
        $(this).addClass('active');
        $('.menu').removeClass('active');
        $('.toggle_button').removeClass('active');
    });

    // toggle Class
    $('.toggle_button').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
});