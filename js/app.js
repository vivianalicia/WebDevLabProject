$(document).ready(function () {
    // Get DOM elements
    const $slider = $('.slider');
    const $leftArrow = $('.left');
    const $rightArrow = $('.right');
    const $indicators = $('.controls li');
    const $carousel = $('.carousel');
    
    let sectionIndex = 0;
    let isTransitioning = false;
    let autoSlideInterval;
    const totalSlides = $('.carousel-section').length;
    const slideDelay = 4000;

    function setIndex() {
        if (isTransitioning) return;
        isTransitioning = true;

        $('.controls .selected').removeClass('selected');
        $indicators.eq(sectionIndex).addClass('selected');

        $slider.css('transform', 'translateX(' + (sectionIndex * -25) + '%)');

        setTimeout(function () {
            isTransitioning = false;
        }, 500);
    }

    function goToNext() {
        sectionIndex = (sectionIndex + 1) % totalSlides;
        setIndex();
    }

    function goToPrevious() {
        sectionIndex = (sectionIndex - 1 + totalSlides) % totalSlides;
        setIndex();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(goToNext, slideDelay);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    $indicators.each(function (index) {
        $(this).on('click', function () {
            sectionIndex = index;
            setIndex();
        });
    });

    $rightArrow.on('click', function () {
        goToNext();
        stopAutoSlide();
        startAutoSlide();
    });

    $leftArrow.on('click', function () {
        goToPrevious();
        stopAutoSlide();
        startAutoSlide();
    });

    $carousel.on('mouseenter', stopAutoSlide);
    $carousel.on('mouseleave', startAutoSlide);

    startAutoSlide();
});
