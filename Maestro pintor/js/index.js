const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');

let index = 0;

setInterval(() => {
  index++;
  if (index >= sliderImages.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}, 5000);