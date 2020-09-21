$(document).ready(function() {

    algorithm_slider = $('.algorithm_items_slider');
    advantages_slider = $('.advantages_slider');

    algorithm_settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 800,
        easing: 'linear',
        infinite: false,

        responsive: [{
            breakpoint: 1430,
            settings: {
                arrows: false
            }
        }]
    }
    advantages_settings = {
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        infinite: false,
        focusOnSelect: true,



        speed: 800,
        easing: 'easy',
    }

    slickForScreenSize(advantages_slider, advantages_settings, $(window).width() > 576);
    slickForScreenSize(algorithm_slider, algorithm_settings, $(window).width() < 1200);



    $('.vertical_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        speed: 1500,
        vertical: true,
        arrows: false,
        easing: 'easy',
        pauseOnHover: false,
        pauseOnFocus: false,
    });
});

function slickForScreenSize(slider, settings, condition) {
    $(window).on('load resize', function() {
        if (condition) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
            return
        }
        if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });
};