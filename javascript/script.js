console.log('check')
document.addEventListener('DOMContentLoaded', () => {
  parallax()
  glitch()
  glitch2()
  flipCard1()
  flipCard2()
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
  const chars = ' @#%!^&*'
  const glitchDuration = 3000
  const interval = 30

  const glitchElements = document.querySelectorAll('.word1')

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
function glitch2() {
  const chars = ' @#%!^&*'
  const glitchDuration = 3000
  const interval = 30

  const glitchElements = document.querySelectorAll('.backword')

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

// function refresh() {
//   const button = document.querySelector('.refresh')

//   button.addEventListener('click', () => {
//     window.location.reload()
//   })
// }
