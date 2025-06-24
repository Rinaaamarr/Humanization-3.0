console.log('check')
document.addEventListener('DOMContentLoaded', () => {
  parallax()
  shuffle()
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
    image1.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)'
    image2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'
    image3.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)'
    image4.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'
  })
}

function shuffle() {
  const text = baffle('.word1')
  text.set({
    character: '',
    speed: 120
  })
  text.start()
  text.reveal(4000)
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
