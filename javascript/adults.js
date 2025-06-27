document.addEventListener('DOMContentLoaded', () => {
  flipCard3()
  flipCard4()
  flipCard5()
  flipCard6()
})

function flipCard3() {
  const card = document.querySelector('.card__inner')

  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped')
  })
}
function flipCard4() {
  const card = document.querySelector('.card__inner-2')

  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped')
  })
}
function flipCard5() {
  const card = document.querySelector('.card__inner3')

  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped')
  })
}
function flipCard6() {
  const card = document.querySelector('.card__inner4')

  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped')
  })
}
