console.log('Hi there! Welcome to my Portfolio Site!')

function menuToggle() {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

let mainNavLinks = document.querySelectorAll('div ul li a')
let mainSections = document.querySelectorAll('main section')

let lastId
let cur = []

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener('scroll', event => {
  let fromTop = window.scrollY

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash)

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('current')
    } else {
      link.classList.remove('current')
    }
  })
})