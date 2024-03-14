const btnCloseEl = document.querySelector('.btn-close');
const visualProEl = document.querySelector('.visual-promotion');

btnCloseEl.addEventListener('click', function () {
  if (visualProEl.classList.contains('active')) {
    visualProEl.classList.remove('active');
  } else {
    visualProEl.classList.add('active');
  }
});