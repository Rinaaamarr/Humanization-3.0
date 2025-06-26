document.addEventListener('DOMContentLoaded', () => {
  windowOpen()
  counter()
})

function windowOpen() {
  const modal = document.querySelector('.modal')
  const btn = document.querySelector('.card1')
  const close = document.querySelector('.close')

  btn.onclick = function () {
    modal.style.visibility = '1'
  }

  close.onclick = function () {
    modal.stylе.displаy = 'block'
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none'
    }
  }
}

function counter() {
  let cartCount = 0
  const cartCountElement = document.getElementById('count')
  const addButton = document.getElementById('add')

  addButton.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
}
