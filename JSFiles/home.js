var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
breakpoints:{
  0:{
    slidesPerView: 1,
  },
  297:{
    slidesPerView: 2,
  },
  1242:{
    slidesPerView: 5,
  },
  1037:{
    slidesPerView: 4,
  },
  554:{
    slidesPerView: 3,
  },
}  ,
});

