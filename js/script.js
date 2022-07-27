/*Carousel*/
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    center: true,
    margin: 30,
    startPosition: 1,
});

$('.slider__arrow--next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider__arrow--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

/*burger*/
const burger = $('.burger');
const headerMenu  = $('.header .nav');

burger.click(() => {
    headerMenu.toggleClass('nav--mobile');
    burger.toggleClass('active');
    $('body').toggleClass('noScroll');
});