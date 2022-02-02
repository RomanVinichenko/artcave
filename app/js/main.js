$(function () {
    // $('.contact__input').focus(function (){
    //     $('.contact__span').addClass('contact__span--active')
    // });
    $('.menu__burger').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__button').toggleClass('menu__button--active');
    });
    $('.logo').on('click', function() {
        $('.menu__list').removeClass('menu__list--active');
    });
    $('main').on('click', function() {
        $('.menu__list').removeClass('menu__list--active');
    });
    $('footer').on('click', function() {
        $('.menu__list').removeClass('menu__list--active');
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

