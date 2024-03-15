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

new Swiper('.br-benefit .swiper', {
  loop: false, // 반복 재생 여부, 1->2->3->4->1->2...
  autoplay: true, // 자동 재생 여부
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수 (기본값: 1)
  spaceBetween: 30, // 슬라이드 사이 여백(간격)px
  centeredSlides: false // 1번 슬라이드가 가운데 보이기
});