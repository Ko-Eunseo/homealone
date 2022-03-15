const productTab = document.querySelector('.product-tab')
const productTabBtnList = productTab.querySelectorAll('button')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

let currentActiveTab = productTab.querySelector('.is-active')
let disableUpdating = false

function toggleActiveTab() {
  //1.is-active
  const tabItem = this.parentNode

  if (currentActiveTab != tabItem) {
    disableUpdating = true
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem

    setTimeout(() => {
      disableUpdating = false
    }, 1000);
  }
}
// window.scrollBy({  //객체  top: ,  left: })
//window.innerWidth 창 너비
function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)

  const scrollAmount = tabPanel.getBoundingClientRect().top - (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  window.scrollBy({
    top: scrollAmount, //얼마나 스크롤을 시켜야 하는가
    behavior: 'smooth' //부드럽게 이동
  })
}

productTabBtnList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPanel)
})

//사전정보: 각 tabpanel의 y축 위치(문서의 시작점에서부터 얼마나 아래에 있는지)
//요소의y축 위치 = window.scrollY + element.getBoundingClientRect().top

const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
  //map: 값을 리턴해야함. 리턴받은 값으로 새로운 배열을 만든다.
})

const productTabPanelPositionMap = {}

function detectTabPanelPosition() {
  //각각의 tabPanel의 y축 위치를 찾는다
  //productTabPanelPosition에 그 값을 업데이트
  //ex. {'product-spec':1000, 'product-review': 5000}

  productTabPanelList.forEach((panel) => {
    //id
    //y축 위치
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    productTabPanelPositionMap[id] = position //key = value

  })

  updateActiveTabOnScroll()
}

function updateActiveTabOnScroll() {
  if (disableUpdating) {
    return //disableUpdating이 true면 함수실행x
  }
  //스크롤 위치에 따라 activeTab 업데이트
  // 1. 현재 유저가 얼마만큼 스크롤을 했느냐 -> window.scrollY
  // 2. 각 tabPanel y축 위치 -> productTabPanelPositionMap

  const scrolledAmount = window.scrollY + (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 80 : TOP_HEADER_MOBILE + 8) //80: paddingbottom, 8: grayBar

  let newActiveTab
  if (scrolledAmount >= productTabPanelPositionMap['product-recomendation']) {
    newActiveTab = productTabBtnList[4] //추천버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabBtnList[3] //배송/환불버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabBtnList[2] //문의버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabBtnList[1] //리뷰버튼
  } else {
    newActiveTab = productTabBtnList[0] //상품정보버튼
  }

  //추가: 끝까지 스크롤을 한 경우 newActiveTab = productTabBtnList[4]
  //window.scrollY + window.innerHeight === body의 전체 height(document.body.offsetHeight)
  //tablet일때 footer의 margin 때문에 html, body의 높이가 다름
  //window.innerWidth < 1200 - orderCta, 56px
  const bodyHeight = document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0)
  if (window.scrollY + window.innerHeight === bodyHeight) {
    newActiveTab = productTabBtnList[4]
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active')
      if (currentActiveTab !== null) {
        //인덱스에 상품정보 탭이 갖고있던 is-active를 삭제했더니 나타났던 error 고침
        currentActiveTab.classList.remove('is-active')
      }
      currentActiveTab = newActiveTab
    }
  }
}

window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', _.throttle(detectTabPanelPosition, 1000))
window.addEventListener('scroll', _.throttle(updateActiveTabOnScroll, 300))