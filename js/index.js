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

  //  点击菜单图标和'更多'唤出弹窗
  $('.guide_right')[0].addEventListener('touchend',function (e) {
    $(".popup").css("display","block")
  });
  $('.nav .nav_b')[3].addEventListener('touchend',function (e) {
    $(".popup").css("display","block")
  });
  // 首页弹窗关闭
  $(".alert_close").on('click',function () {
    $(".popup").css("display","none")
  })
});