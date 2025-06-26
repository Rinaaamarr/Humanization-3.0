document.addEventListener('DOMContentLoaded', () => {
  windowOpen()
  windowOpen1()
  windowOpen2()
  windowOpen3()
  windowOpen4()
  windowOpen5()
  counter()
})

function windowOpen() {
  const modal = document.querySelector('.modal')
  const btn = document.querySelector('.item-1-name')
  const close = document.querySelector('.close')

  btn.addEventListener('click', () => {
    modal.classList.toggle('visible')
  })
  close.addEventListener('click', () => {
    modal.classList.toggle('visible')
  })
}
function windowOpen1() {
  const modal2 = document.querySelector('.modal2')
  const btn = document.querySelector('.item-2-name')
  const close = document.querySelector('.close-2')

  btn.addEventListener('click', () => {
    modal2.classList.toggle('visible')
  })
  close.addEventListener('click', () => {
    modal2.classList.toggle('visible')
  })
}
function windowOpen2() {
  const modal2 = document.querySelector('.modal3')
  const btn = document.querySelector('.item-3-name')
  const close = document.querySelector('.close-3')

  btn.addEventListener('click', () => {
    modal2.classList.toggle('visible')
  })
  close.addEventListener('click', () => {
    modal2.classList.toggle('visible')
  })
}
function windowOpen3() {
  const modal2 = document.querySelector('.modal4')
  const btn = document.querySelector('.item-4-name')
  const close = document.querySelector('.close-4')

  btn.addEventListener('click', () => {
    modal2.classList.toggle('visible')
  })
  close.addEventListener('click', () => {
    modal2.classList.toggle('visible')
  })
}
function windowOpen4() {
  const modal = document.querySelector('.modal5')
  const btn = document.querySelector('.item-5-name')
  const close = document.querySelector('.close-5')

  btn.addEventListener('click', () => {
    modal.classList.toggle('visible')
  })
  close.addEventListener('click', () => {
    modal.classList.toggle('visible')
  })
}
function windowOpen5() {
  const modal = document.querySelector('.modal6')
  const btn = document.querySelector('.item-6-name')
  const close = document.querySelector('.close-6')

  btn.addEventListener('click', () => {
    modal.classList.toggle('visible')
  })
  close.addEventListener('click', () => {
    modal.classList.toggle('visible')
  })
}
function counter() {
  let cartCount = 0
  const cartCountElement = document.getElementById('count')
  const addButton = document.getElementById('add')
  const addButton2 = document.getElementById('add-2')
  const addButton3 = document.getElementById('add-3')
  const addButton4 = document.getElementById('add-4')
  const addButton5 = document.getElementById('add-5')
  const addButton6 = document.getElementById('add-6')
  //   Кнопка в карточке
  const addFromCard = document.getElementById('add-to-cart')
  const addFromCard2 = document.getElementById('add-to-cart-2')
  const addFromCard3 = document.getElementById('add-to-cart-3')
  const addFromCard4 = document.getElementById('add-to-cart-4')
  const addFromCard5 = document.getElementById('add-to-cart-5')
  const addFromCard6 = document.getElementById('add-to-cart-6')
  // Со страницы
  addButton.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
  addButton2.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
  addButton3.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
  addButton4.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
  addButton5.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
  addButton6.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
  //   ___________________
  // С карточки товара
  addFromCard.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
  addFromCard2.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
  addFromCard3.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
  addFromCard4.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
  addFromCard5.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
  addFromCard6.addEventListener('click', () => {
    cartCount++
    cartCountElement.textContent = cartCount
  })
}
