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
  slidesPerView: 2, 
  slidesPerGroup: 2,
  spaceBetween: 10, 
  centeredSlides: false,
  pagination: { 
    el: '.promotion .swiper-pagination', 
    clickable: true 
  },
  breakpoints: {
    768: {
      slidesPerView: 4,  //브라우저가 768보다 클 때
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,  //브라우저가 1024보다 클 때
      slidesPerGroup: 5,
      spaceBetween: 30,
    },
  },
});

new Swiper('.new-item .swiper', {
  speed : 1000,
  loop: false, 
  autoplay: true, 
  slidesPerView: 1, 
  spaceBetween: 50, 
  centeredSlides: false,
  pagination: { 
    el: '.new-item .swiper-pagination', 
    clickable: true 
  }
});

new Swiper('.br-benefit .swiper', {
  loop: false,
  autoplay: true, 
  slidesPerView: 2, 
  spaceBetween: 10, 
  centeredSlides: false,
  breakpoints: {
    768: {
      slidesPerView: 4,  //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,  //브라우저가 1024보다 클 때
      spaceBetween: 30,
    },
  },
});

new Date().getFullYear(); 
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

const loginSebEl = document.querySelector('.login_seb');
const personBtn = document.querySelector('.person-btn');

personBtn.addEventListener('click', function () {
  loginSebEl.classList.toggle('active');
})

const navEl = document.querySelector('.m-menu-list');
const hamburgerEl = document.querySelector('.btn-hamburger');
const closeEl = document.querySelector('.btn-close');

hamburgerEl.addEventListener('click', function () {
  navEl.classList.add('active');
});

closeEl.addEventListener('click', function () {
  navEl.classList.remove('active');
});

// document.addEventListener("touchstart", function() {}, true);

const mItemEls = document.querySelectorAll('.m_item');

mItemEls.forEach(function (mItemEl, Itemindex) {
  mItemEl.addEventListener('click', function () {
    mItemEls[Itemindex].classList.toggle('show');
  });
});


new Swiper('.m-new-item .swiper', {
  speed : 1000,
  loop: false, 
  autoplay: true, 
  slidesPerView: 1, 
  spaceBetween: 50, 
  centeredSlides: false,
  pagination: { 
    el: '.m-new-item .swiper-pagination', 
    clickable: true 
  }
});