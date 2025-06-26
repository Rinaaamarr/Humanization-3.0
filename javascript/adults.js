document.addEventListener('DOMContentLoaded', () => {
  flipCard3()
  flipCard4()
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
