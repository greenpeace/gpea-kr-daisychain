let currentSlide = 3;

function goToSlide(slide) {
  currentSlide = slide;
  updateSlidePosition();
}

function prevSlide() {
  if (currentSlide > 1) {
    currentSlide--;
    updateSlidePosition();
  }
}

function nextSlide() {
  if (currentSlide < 5) {
    currentSlide++;
    updateSlidePosition();
  }
}

function updateSlidePosition() {
    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.carousel-controls button');
  
    const slideGap = 0.2; // 슬라이드 간격 변경
  
    slides.forEach((slide, index) => {
      if (index + 1 === currentSlide) {
        slide.classList.add('selected');
      } else {
        slide.classList.remove('selected');
      }
  
      const slideWidth = slide.offsetWidth;
      const offset = (index - (currentSlide - 1)) * (slideWidth + slideGap * slideWidth);
  
      slide.style.transform = `translateX(${offset}px)`;
    });
  
    buttons.forEach((button, index) => {
      if (index + 1 === currentSlide) {
        button.classList.add('selected');
      } else {
        button.classList.remove('selected');
      }
    });
  }
  
  

updateSlidePosition();

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

const carouselButtons = document.querySelectorAll('.carousel-controls button');
carouselButtons.forEach((button, index) => {
  button.addEventListener('click', () => goToSlide(index + 1));
});