document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');
    const indicatorParents = document.querySelector('.controls ul');
    const indicators = document.querySelectorAll('.controls li');
    const carousel = document.querySelector('.carousel');
    
    // Variables
    let sectionIndex = 0;
    let isTransitioning = false;
    let autoSlideInterval;
    const totalSlides = document.querySelectorAll('.carousel-section').length;
    const slideDelay = 4000; // 4 seconds
    
    // Function to update the slider position and indicators
    function setIndex() {
        if (isTransitioning) return;
        
        // Set transitioning state
        isTransitioning = true;
        
        // Remove selected class from all indicators
        document.querySelector('.controls .selected').classList.remove('selected');
        
        // Add selected class to current indicator
        indicators[sectionIndex].classList.add('selected');
        
        // Move the slider
        slider.style.transform = 'translateX(' + (sectionIndex * -25) + '%)';
        
        // Reset transitioning state after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }
    
    // Function to go to next slide
    function goToNext() {
        if (sectionIndex < totalSlides - 1) {
            sectionIndex++;
        } else {
            sectionIndex = 0; // Loop back to first slide
        }
        setIndex();
    }
    
    // Function to go to previous slide
    function goToPrevious() {
        if (sectionIndex > 0) {
            sectionIndex--;
        } else {
            sectionIndex = totalSlides - 1; // Loop to last slide
        }
        setIndex();
    }
    
    // Start auto-sliding
    function startAutoSlide() {
        autoSlideInterval = setInterval(goToNext, slideDelay);
    }
    
    // Stop auto-sliding
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Add click event listeners to indicators
    indicators.forEach(function(indicator, index) {
        indicator.addEventListener('click', function() {
            sectionIndex = index;
            setIndex();
        });
    });
    
    // Add click event listener to right arrow
    rightArrow.addEventListener('click', function() {
        goToNext();
        // Reset auto-slide timer when manually navigating
        stopAutoSlide();
        startAutoSlide();
    });
    
    // Add click event listener to left arrow
    leftArrow.addEventListener('click', function() {
        goToPrevious();
        // Reset auto-slide timer when manually navigating
        stopAutoSlide();
        startAutoSlide();
    });
    
    // Pause auto-sliding when hovering over carousel
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
    
    // Start auto-sliding when page loads
    startAutoSlide();
});