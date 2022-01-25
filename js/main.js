$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('header--active');
        } else {
            $('.header').removeClass('header--active');
        }
    });
    $('.articles__list').slick({
        loop: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    });

});

