let currentSlideIndex = 1;
showSlides(currentSlideIndex);

function plusSlides(nextSlideIndex) {
    showSlides(currentSlideIndex += nextSlideIndex);
}

function currentSlide(nextSlideIndex) {
    showSlides(currentSlideIndex = nextSlideIndex)
}

function showSlides(nextSlideIndex) {
    const slides = document.getElementsByClassName('end__carousel');
    
    if (nextSlideIndex > slides.length) {
        currentSlideIndex = 1;
    }

    if (nextSlideIndex < 1) {
        currentSlideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('end__carousel-active')
    }

    slides[currentSlideIndex - 1].classList.add('end__carousel-active');
}