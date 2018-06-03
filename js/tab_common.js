$(function () {
  // 选项卡切换
  var num2;
  var toggle = true;
  $('.tabText').on('click',function () {
    // console.log(toggle);
    //  获取点击元素的索引

    var num1 = $(this).index();
    if(num1 !== num2) {
      //  清除所有样式
      toggle = true;
      $('.tabText').find('span').css('color','#000');
      $('.tabText').find('img').attr('src','./images/case/case_default.png');
      $('.tabContent>ul').css('display','none');
      //  给当前点击元素设置样式
      $(this).find('span').css('color','red');
      $(this).find('img').attr('src','./images/case/case_open.png');
      $(this).parent().parent().find('.tabContent>ul').eq(num1).css('display','block')
    }else {
      if(toggle) {
        $('.tabContent>ul').eq(num1).css('display','none');
        //  清除默认样式
        $('.tabText').find('span').css('color','#000');
        $('.tabText').find('img').attr('src','./images/case/case_default.png');
        $('.tabContent>ul').css('display','none');
        toggle = !toggle;
      }else {
        $('.tabContent>ul').eq(num1).css('display','block');
        toggle = !toggle;
        //  给当前点击元素设置样式
        $(this).find('span').css('color','red');
        $(this).find('img').attr('src','./images/case/case_open.png');
        $(this).parent().parent().find('.tabContent>ul').eq(num1).css('display','block')
      }
    }
    num2 = num1;
  });

});

