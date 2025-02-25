VANTA.NET({
    el: "#container",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x1d020b,
    backgroundColor: 0x8b67cc
  })

  var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var typed = new Typed('#con', {
    stringsElement: '#text',
    showCursor:false,
    loop: true,
    smartBackspace: true,
  });

  var typed = new Typed('#con1', {
     stringsElement: '#text1',
     typeSpeed: 100,
    smartBackspace: true,
    loop:true,
    showCursor:false,
    startDelay: 100,
  });

 
