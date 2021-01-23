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
