# 내일의 집

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-btn is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a
    class="gnb-icon-btn is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동, 5개의 상품이 장바구니에 담겨있습니다."
  >
    <i class="ic-cart"></i>
    <strong class="badge">9</strong>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-btn is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a class="gnb-icon-btn sm-hidden" href="/">
    <i class="ic-bookmark" aria-label="스크랩북 페이지로 이동"></i>
  </a>

  <a class="gnb-icon-btn sm-hidden" href="/">
    <i class="ic-bell" aria-label="내 소식 페이지로 이동"></i>
  </a>

  <a
    class="gnb-icon-btn is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동, 5개의 상품이 장바구니에 담겨있습니다."
  >
    <i class="ic-cart"></i>
    <strong class="badge">9</strong>
  </a>

  <button
    class="gnb-avatar-btn sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="사딸라아저씨" />
    </div>
  </button>
</div>
```

### 2. sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="/">로그인</a>
  <a class="btn-primary btn-40" href="/">회원가입</a>
</div>
```

- 로그인을 한 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="사딸라아저씨" />
    </div>
    <strong class="username">사달라</strong>
  </a>
</div>
```
