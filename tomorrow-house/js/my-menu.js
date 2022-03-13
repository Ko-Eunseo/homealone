const myMenu = document.querySelector('.my-menu')
const myMenuBtn = document.querySelector('.my-menu-btn')

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

myMenuBtn.addEventListener('click', toggleMyMenu)

function closeMyMenuOnClickingOutside(e) {
  console.log("window!")
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}
