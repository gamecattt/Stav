$('.products-slider').slick({
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '.slider .slider__arrow-prev',
    nextArrow: '.slider .slider__arrow-next',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
})

//
const burger = document.querySelector('.burger')
const header = document.querySelector('.header')

burger.addEventListener('click', function () {
    header.classList.toggle('open')
})
