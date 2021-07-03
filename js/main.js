const swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }, 
        autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    speed: 1300,
      
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',                
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});