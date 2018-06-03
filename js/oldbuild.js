$(function () {
  //  轮播图
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',  // 水平滚动
    loop: true,
    speed: 500,   // 自动播放速度
    autoplay: 2000,    // 自动播放时间
    autoplayDisableOnInteraction: false,  // 允许控制之后轮播
    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
  });
})