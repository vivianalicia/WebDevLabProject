jQuery(document).ready(function ($) {
    let currentIndex = 0;
    const slides = $(".slider-img");
    const totalSlides = slides.length;

    slides.eq(currentIndex).addClass("active");

    function animateTextIn(element) {
        $(element).css({
            transform: 'translateX(-5%)',
            opacity: 0
        })
        
        setTimeout(() => {
            element.css({
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                opacity: 1,
                transform: "translateX(0)"
            });
        }, 100);
    }

    function showNextSlide() {
        slides.removeClass("active");
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.eq(currentIndex).addClass("active");

        $(".slider-img h2").css({
            opacity: 0,
            transform: "translateX(-50px)",
            transition: "none"
        });

        setTimeout(() => {
            animateTextIn(slides.eq(currentIndex).find("h2"));
        }, 300);
    }

    setInterval(showNextSlide, 3000);

    $(".slider-img").on("click", function () {
        slides.removeClass("active");
        $(this).addClass("active");
        currentIndex = $(this).index();

        $(".slider-img h2").css({
            opacity: 0,
            transform: 'translateX(-50%)'
        });
        animateTextIn($(this).find("h2"));
    });

});

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul')
let sectionIndex=0;

function setIndex(){
  document.querySelector('.controls .selected').classList.remove('selected')
  slider.style.transform = 'translate('+ (sectionIndex*-25) + '%)';
}

document.querySelectorAll('.controls li').forEach(function(indicatior, ind){
indicatior.addEventListener('click', function(){
sectionIndex=ind;
indicatior.classList.add('selected');
setIndex();
    });
});

rightArrow.addEventListener('click', function(){
sectionIndex = (sectionIndex < 3) ? sectionIndex + 1:3;
indicatorParents.children[sectionIndex].classList.add('selected');
setIndex();
});

leftArrow.addEventListener('click', function(){
sectionIndex = (sectionIndex > 0) ? sectionIndex - 1:0;
indicatorParents.children[sectionIndex].classList.add('selected');
setIndex();
});

$(document).ready(function() {
    let currentIndex = 0;
    const $slides = $('.slider section');
    const totalSlides = $slides.length;
    let interval;

    // Fungsi untuk pindah slide
    function goToSlide(index) {
        currentIndex = index;
        $('.slider').css('transform', `translateX(-${currentIndex * 100}%)`);
        $slides.removeClass('active').eq(currentIndex).addClass('active');
    }

    // Auto slide setiap 5 detik
    function startAutoSlide() {
        interval = setInterval(() => {
            goToSlide((currentIndex + 1) % totalSlides);
        }, 5000);
    }
});

