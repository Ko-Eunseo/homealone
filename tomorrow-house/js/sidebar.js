const sidebarMenuButton = document.querySelector('.gnb-icon-btn.is-menu')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

function openSidebar() {
  //classList.add(''): 클래스명 적는다
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarMenuButton.addEventListener('click', openSidebar)

sidebarOverlay.addEventListener('click', closeSidebar)