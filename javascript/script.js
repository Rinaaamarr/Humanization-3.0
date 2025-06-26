console.log('check')
document.addEventListener('DOMContentLoaded', () => {
  parallax()
  glitch()
  flipCard1()
  flipCard2()
  myFunction()
  //   windowOpen()
  //   refresh()
})

function parallax() {
  let bg = document.querySelector('.mouse-parallax-bg')
  let image1 = document.querySelector('.mouse-parallax-image-1')
  let image2 = document.querySelector('.mouse-parallax-image-2')
  let image3 = document.querySelector('.mouse-parallax-image-3')
  let image4 = document.querySelector('.mouse-parallax-image-4')
  window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth
    let y = e.clientY / window.innerHeight
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'
    image1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'
    image2.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)'
    image3.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)'
    image4.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'
  })
}

function glitch() {
  const chars = ' @#%!^ @%#^&! *&^% '
  const glitchDuration = 1000
  const interval = 30

  const glitchElements = document.querySelectorAll(
    '.word1, .word2, .word3, .word4, .word5 '
  )

  glitchElements.forEach((el) => {
    const originalText = el.dataset.text || el.textContent

    el.addEventListener('mouseenter', () => {
      let frame = 0
      const length = originalText.length

      const randomChar = () => chars[Math.floor(Math.random() * chars.length)]

      const glitchInterval = setInterval(() => {
        let output = ''

        for (let i = 0; i < length; i++) {
          if (i < frame) {
            output += originalText[i]
          } else {
            output += randomChar()
          }
        }
        el.textContent = output

        frame++

        if (frame > length) {
          clearInterval(glitchInterval)
          el.textContent = originalText
        }
      }, interval)
    })
  })
}

  var line1 = document.getElementById('line1')
  var length = line1.getTotalLength()

  // The start position of the drawing
  line1.style.strokeDasharray = length

  // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
  line1.style.strokeDashoffset = length

  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
  window.addEventListener('scroll', myFunction)

  function myFunction() {
    var scrollpercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)

    var draw = length * scrollpercent

    // Reverse the drawing (when scrolling upwards)
    line1.style.strokeDashoffset = length - draw
  }

function flipCard1() {
  const card = document.querySelector('.card__inner')

  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped')
  })
}
function flipCard2() {
  const card = document.querySelector('.card__inner-2')

  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped')
  })
}

// function windowOpen() {
//   const modal = document.querySelector('#modal')
//   const btn = document.querySelector('#itemOne')
//   const close = document.querySelector('.close')

//   btn.onclick = function () {
//     modal.style.visibility = '1'
//   }

//   close.onclick = function () {
//     modal.style.display = 'none'
//   }

//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = 'none'
//     }
//   }
// }

// function refresh() {
//   const button = document.querySelector('.refresh')

//   button.addEventListener('click', () => {
//     window.location.reload()
//   })
// }
