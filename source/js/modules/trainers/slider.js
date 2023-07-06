import Swiper from '../../vendor/swiper';

export const initSlider = () => {
  const swiper = new Swiper('.trainers__content', {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: '.trainers__next',
      prevEl: '.trainers__prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      725: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  return swiper;
};
