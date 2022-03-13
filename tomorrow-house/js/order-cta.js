const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
// const orderCtaBuyButton = orderCta.children[1]
// const orderCtaBookmarkButton = orderCta.children[0]

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}
function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)


function toggleOrderCtaBookmark() {
  //1. 버튼 클래스: is-active
  //2. 아이콘 클래스 변경: ic-bookmark vs. ic-bookmark-filled
  //3. 카운트 값을 변경
  const [icon, countSpan] = this.children //[아이콘, 카운트span]
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))
  //console.log(typeof count) //string
  // a.replace('b', '') a라는 값중 b는 바꾸고싶음(없애고싶을땐'') replaceAll!

  let newCount = count

  // is-active
  if (this.classList.contains('is-active')) {
    // Note: 활성화가 된 상태 ->비활성화(ic-bookmark), -1
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    // Note: 비활성화가 된 상태 ->활성화(ic-bookmark-filled), +!
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  // toLocaleString(): ,넣어주는 함수
  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)