let btnMenu = document.querySelector('.boton');
let navBar = document.querySelector('nav');
let body = document.querySelector('body');
let scrollBtn = document.querySelector('.scroll-up');




btnMenu.addEventListener('click', () => {
  navBar.classList.toggle('visible');
  btnMenu.classList.toggle('visible');
  body.classList.toggle('overflow')
})

window.addEventListener('scroll', () => {

  if (window.scrollY > 250) {
    btnMenu.style.display = 'none';
    navBar.classList.remove('visible');
    scrollBtn.classList.add('translate');
  } else {
    btnMenu.style.display = 'block';
    scrollBtn.classList.remove('translate')
  }
  body.classList.remove('overflow');
  btnMenu.classList.remove('visible');
})




