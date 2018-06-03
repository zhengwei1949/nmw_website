$(function () {
  //  选择区域选择市
  $('.btn5').on('focus',function () {
    $('.popup2').slideDown(500);
    $('.popup2List li').on('click',function () {
      var txt = $(this).text();
      $(this).parents('.calc_form').find('b>i').text(txt)
    })
  }).on('blur',function () {
    $('.popup2').slideUp(500)
  })
});