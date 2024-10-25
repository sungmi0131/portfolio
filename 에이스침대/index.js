
const header = document.querySelector('header'); // header를 변수로
const navs = document.querySelectorAll('.main-menu'); // .main-menu를 변수로 + 2개이상이라 All

navs.forEach((nav) => { // .main-menu가 2개 이상이라 forEach
    nav.addEventListener('mouseenter', function () { // mouseenter Event
        header.classList.add('on'); // header에 class 추가
    })
    nav.addEventListener('mouseleave', function () { // mouseleave Event
        header.classList.remove('on'); // header에 class 제거
    })
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});
const prevs = document.querySelectorAll('.prev');
const nexts = document.querySelectorAll('.next');

prevs.forEach((prev) => {
    prev.addEventListener('mouseenter', function () {
        this.querySelector('path').setAttribute('d', "M 40 10 Q 10 65 40 140");
    });
    prev.addEventListener('mouseleave', function () {
        this.querySelector('path').setAttribute('d', "M 40 10 Q 40 65 40 140");
    });
});

nexts.forEach((next) => {
    next.addEventListener('mouseenter', function () {
        this.querySelector('path').setAttribute('d', "M 10 10 Q 40 65 10 140");
    });
    next.addEventListener('mouseleave', function () {
        this.querySelector('path').setAttribute('d', "M 10 10 Q 10 65 10 140");
    });
});

var swiper3 = new Swiper(".sec2-Swiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".sec2-Swiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});




$('.tab-list li').click(function (e) {
    e.preventDefault()
    let idx = $(this).index()
    $('.tab-list li').removeClass('on')
    $(this).addClass('on')
    $('.video').animate({ 'left': idx * -100 + '%' })
    $('.desc li').removeClass('on')
    $('.desc li').eq(idx).addClass('on')
})

var swiper6 = new Swiper(".sec3-Swiper", {
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
  