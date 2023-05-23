const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let currentIndex = 0;
const slideWidth = images[0].clientWidth;
const slideInterval = 3000; // Time between slides (in milliseconds)

function nextSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  carouselImages.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function adjustCarouselWidth() {
  carouselImages.style.width = `${slideWidth * images.length}px`;
}

adjustCarouselWidth();
setInterval(nextSlide, slideInterval);