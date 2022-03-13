const reviewLikeBtnList = document.querySelectorAll('.review-card-footer button')

const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'

function togglereviewLikeBtn() {
  const isLiked = this.classList.contains('btn-primary')
  const textElement = this.nextElementSibling
  const reviewCardFooter = this.parentNode

  if (isLiked) {
    this.innerHTML = NOT_HELPFUL
  } else {
    this.innerHTML = HELPFUL
    const checkIc = document.createElement('i')
    checkIc.classList.add('ic-check')
    checkIc.setAttribute('aria-hidden', true)
    this.prepend(checkIc)
  }

  if (textElement) {
    //n명->n값을 업데이트
    const countSpan = textElement.querySelector('span')
    const count = Number(countSpan.innerHTML.replaceAll(',', ''))

    let newCount = count
    if (isLiked) {
      //비활성화 count -1
      newCount = newCount - 1
      if (newCount === 0) {
        // text 삭제
        reviewCardFooter.removeChild(textElement)
      } else {
        countSpan.innerHTML = newCount.toLocaleString()
      }
    } else {
      //활성화 count + 1
      newCount = newCount + 1
      countSpan.innerHTML = newCount.toLocaleString()
    }
  } else {
    if (!isLiked) {
      // 앞으로 활성화가 될것임 => 1명
      const newTextElement = document.createElement('p')
      newTextElement.innerHTML = '<strong><span>1</span>명</strong>에게 도움이 되었습니다.'
      reviewCardFooter.appendChild(newTextElement)
    }
  }

  this.classList.toggle('btn-primary')
  this.classList.toggle('btn-outlined')
}

reviewLikeBtnList.forEach((button) => {
  button.addEventListener('click', togglereviewLikeBtn)
})

