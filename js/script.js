const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 64);
});

const headerBars = document.querySelector('.header__bars')
const overlay = document.querySelector('.header__overlay')
const headerRight = document.querySelector('.header__right')
const body = document.querySelector('body')

headerBars.addEventListener('click', () => {
  overlay.classList.toggle('show-overlay')
  headerRight.classList.toggle('show-menu')
  body.classList.toggle('overflow')
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('show-overlay')
  headerRight.classList.remove('show-menu')
  body.classList.remove('overflow')
})
