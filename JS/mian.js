const btnCloseEl = document.querySelector('.btn-close');
const visualProEl = document.querySelector('.visual-promotion');

btnCloseEl.addEventListener('click', function () {
  visualProEl.classList.toggle('active');
});

new Swiper('.promotion .swiper', {
  speed : 1000,
  loop: true, 
  autoplay: true, 
  slidesPerView: 5, 
  slidesPerGroup: 5,
  spaceBetween: 30, 
  centeredSlides: false,
  pagination: { 
    el: '.promotion .swiper-pagination', 
    clickable: true 
  }
});

new Swiper('.new-item .swiper', {
  speed : 1000,
  loop: false, 
  autoplay: true, 
  slidesPerView: 1, 
  spaceBetween: 30, 
  centeredSlides: false,
  pagination: { 
    el: '.new-item .swiper-pagination', 
    clickable: true 
  }
});