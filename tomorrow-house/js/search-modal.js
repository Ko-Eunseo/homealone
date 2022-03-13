const searchModal = document.querySelector('.search-modal')
const searchOverlay = document.querySelector('.overlay')
const searchBtn = document.querySelector('.gnb-icon-btn.is-search')
const searchModalCloseBtn = searchModal.querySelector('.search-modal-form .btn-ghost')

function openSearchModal() {
  searchModal.classList.add('is-active')
  searchOverlay.classList.add('is-active')
}

function closeSearchModal() {
  searchModal.classList.remove('is-active')
  searchOverlay.classList.remove('is-active')
}

searchBtn.addEventListener('click', openSearchModal)

searchModalCloseBtn.addEventListener('click', closeSearchModal)