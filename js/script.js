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

$('.catalog-grid__slider').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '.catalog-grid .slider__arrow-prev',
    nextArrow: '.catalog-grid .slider__arrow-next',
})

//
const burger = document.querySelector('.burger')
const header = document.querySelector('.header')

burger.addEventListener('click', function () {
    header.classList.toggle('open')
})

//
const scrollLink = document.querySelector('.scroll-link')
const showcase = document.querySelector('.showcase')

scrollLink.addEventListener('click', function (event) {
    event.preventDefault()
    showcase.scrollIntoView({
        behavior: 'smooth',
    })
})
