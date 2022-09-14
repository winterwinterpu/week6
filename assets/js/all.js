"use strict";

// courseSwiper
var swiper = new Swiper(".courseSwiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  speed: 1000,
  centeredSlides: true,
  autoplay: {
    delay: 100,
    disableOnInteraction: false
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 16
    },
    1024: {
      slidesPerView: 10,
      spaceBetween: 16
    }
  }
}); //feedback-swiper

var swiper2 = new Swiper(".feedback-swiper", {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); //class-swiper

var swiper = new Swiper(".course-swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 16
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 16
    }
  }
});
//# sourceMappingURL=all.js.map
