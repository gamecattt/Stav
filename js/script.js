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

$('.catalog-grid__row').each(function () {
    const el = $(this)
    $('.catalog-grid__slider', el).slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: $('.slider__arrow-prev', el),
        nextArrow: $('.slider__arrow-next', el),
    })
})

$('.product__slider').each(function () {
    $(this).slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
    })
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

if (scrollLink) {
    scrollLink.addEventListener('click', function (event) {
        event.preventDefault()
        showcase.scrollIntoView({
            behavior: 'smooth',
        })
    })
}

//
$('[data-popup]').click(function () {
    $(`#${$(this).data('popup')}`).addClass('popup_opened')
    return false
})

$('.popup__btn-close').click(function () {
    $(this).closest('.popup').removeClass('popup_opened')
})

$('.popup').click(function (e) {
    if (e.target != this) return
    $(this).removeClass('popup_opened')
})

//
$('.lang > .lang__link').click(function () {
    $('.lang__list').toggleClass('active')
    return false
})

$('.dot').click(function () {
    $('.tech__images img:nth-child(2)').attr('src', './images/banner-img2.png')
})
