const btnCloseEl = document.querySelector('.btn-close');
const visualProEl = document.querySelector('.visual-promotion');

btnCloseEl.addEventListener('click', function () {
  if (visualProEl.classList.contains('active')) {
    visualProEl.classList.remove('active');
  } else {
    visualProEl.classList.add('active');
  }
});

new Swiper('.promotion .swiper', {
  // Optional parameters
  // direction: 'horizontal', // 수평 슬라이드 (기본값) 생략가능
  loop: true, // 반복 재생 여부, 1->2->3->4->1->2...
  autoplay: true, // 자동 재생 여부
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수 (기본값: 1)
  spaceBetween: 30, // 슬라이드 사이 여백(간격)px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지네이션 사용
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.awards .swiper-button-next',
    prevEl: '.awards .swiper-button-prev',
  },
});