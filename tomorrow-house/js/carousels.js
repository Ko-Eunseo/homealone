const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryMoblie = tns({
  container: '.user-gallery.is-moblie .slider-list',
  gutter: 4,
  edgePadding: 16,
  controls: false,
  navContainer: '.user-gallery.is-moblie .thumbnail-list',
  navAsThumbnails: true,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  gutter: 6,
  edgePadding: 75,
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  navAsThumbnails: true,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})
