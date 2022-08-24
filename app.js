let body = document.querySelector('body')
body.classList.remove('no-js')

const page = document.querySelectorAll('.background')
const scroll = document.querySelectorAll('.scroll')

function debounce(func, wait) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  }
}

function updateScroll(item) {
  for (let i = 0; i < scroll.length; i++) {
    if(item == i) {
      scroll[i].classList.add('active')
    } else {
      scroll[i].classList.remove('active')
    }
  }
}

function backgroundShow(item) {
  for (let i = 0; i < scroll.length; i++) {
    if(item == i) {
      page[i].classList.add('active')
    } else {
      page[i].classList.remove('active')
    }
  }
}

function animeScroll() {
  const windowTop = window.pageYOffset + window.innerHeight * 3 / 4;
  for (let i = 0; i < page.length; i++) {
    if(windowTop > page[i].offsetTop) {
      updateScroll(i)
    }
  }
}

animeScroll();

let nav = document.querySelector('nav ul')
let navIcon = document.querySelector('.menu')

function showNav() {
  console.log(nav)
  if(nav.style.marginRight == '-200%') {
    nav.style.marginRight = '0'
    navIcon.classList.remove('close')
  } else {
    nav.style.marginRight = '-200%'
    navIcon.classList.add('close')
  }
  
  console.log(nav)
}

if(page.length) {
  window.addEventListener('scroll', ()=>{
    debounce(animeScroll(), 200)
  })
}
