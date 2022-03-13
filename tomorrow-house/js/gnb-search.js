const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deletaAllButton = gnbSearchHistory.querySelector('.search-history-header button')

console.log(deletaAllButton.innerHTML)

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistory)
  }
}

function openGnbSearchHistory() {
  //체크 => gnbSearchHistoryList li가 몇개있는지
  //li가 0개 => 실행x
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory)
  }
  gnbSearchHistory.classList.add('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deleteAllSearchHistories() {
  // gnbSearchHistoryList 안에 들어있는 모든 li 삭제
  gnbSearchHistoryList.innerHTML = '' //빈 문자열을 넣는다
  gnbSearchHistory.classList.remove('is-active')
}

deletaAllButton.addEventListener('click', deleteAllSearchHistories)