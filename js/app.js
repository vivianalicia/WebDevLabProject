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

