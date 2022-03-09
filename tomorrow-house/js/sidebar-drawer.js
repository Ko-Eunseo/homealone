const drawerMenuBtnList = document.querySelectorAll('.drawer-menu-btn')

function toggleDrawerMenu() {
  // 해당 drawerMenu에 is-open 추가
  // classList.toggle('')로 open,close 제어
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

// forEach 활용
drawerMenuBtnList.forEach(function (button) {
  button.addEventListener('click', toggleDrawerMenu)
})