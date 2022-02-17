let btnMenu = document.querySelector('.boton');
let navBar = document.querySelector('nav');
let body = document.querySelector('body');
let scrollBtn = document.querySelector('.scroll-up')

btnMenu.addEventListener('click', () => {
  navBar.classList.toggle('visible');
  btnMenu.classList.toggle('visible');
  body.classList.toggle('overflow')
})

window.addEventListener('scroll', e => {

  if (window.scrollY > 250) {
    btnMenu.style.display = 'none';
    scrollBtn.classList.add('translate')
  } else if(window.scrollY <= 250){
    btnMenu.style.display = 'block';
    scrollBtn.classList.remove('translate')
  }
})