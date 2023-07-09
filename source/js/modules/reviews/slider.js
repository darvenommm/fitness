import Slider from '../../vendor/swiper';

export const createReviewsSlider = () => {
  const reviewsSlider = new Slider('.reviews__content', {
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
    },
  });

  return reviewsSlider;
};
