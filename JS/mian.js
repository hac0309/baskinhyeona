const headerEl = document.querySelector('header');
window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  if (window.scrollY > 10) {
    headerEl.classList.add('scroll_on');
  } else {
    headerEl.classList.remove('scroll_on');
  }
});

const btnCloseEl = document.querySelector('.btn-close');
const visualProEl = document.querySelector('.visual-promotion');

btnCloseEl.addEventListener('click', function () {
  visualProEl.classList.toggle('hide');
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

new Swiper('.br-benefit .swiper', {
  loop: false,
  autoplay: true, 
  slidesPerView: 5, 
  spaceBetween: 30, 
  centeredSlides: false 
});

new Date().getFullYear(); 
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

const loginSebEl = document.querySelector('.login_seb');
const personBtn = document.querySelector('.person-btn');

personBtn.addEventListener('click', function () {
  loginSebEl.classList.toggle('active');
})
