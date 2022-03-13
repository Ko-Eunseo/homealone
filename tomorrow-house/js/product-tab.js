const productTab = document.querySelector('.product-tab')
const productTabBtnList = productTab.querySelectorAll('button')

let currentActiveTab = productTab.querySelector('.is-active')

function toggleActiveTab() {
  //1.is-active
  const tabItem = this.parentNode

  if (currentActiveTab != tabItem) {
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  }
}

productTabBtnList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
})
