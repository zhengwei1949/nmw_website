window.onload = function () {

  var lis = document.querySelectorAll('.all_designerList>li');
  var btn5 = document.querySelector('.btn5');

  for(var i = 0; i < lis.length; i++) {
    //  设置设计师图片
    lis[i].style.backgroundImage = "url(./images/designer/order_designer/orderdesigner_"+(i + 1)+".jpg)";
    //  选人
    lis[i].index = i;

    lis[i].onclick = function () {
      //  添加边框
      for(var i = 0; i < lis.length; i++) {
        lis[i].innerHTML = '';
      }
      this.innerHTML = '<img src="./images/designer/orderdesigner_selected.png" alt="">';

      // 填入文本框文字
      if(this.index == 0) {
        btn5.value = '设计总监-郭芷逸';
      }else if(this.index == 1) {
        btn5.value = '首席设计师-刘阔';
      }else if(this.index == 2) {
        btn5.value = '高级设计师-胡丽丽';
      }else if(this.index == 3) {
        btn5.value = '高级设计师-刘卫华';
      }else if(this.index == 4) {
        btn5.value = '高级设计师-罗子文';
      }else if(this.index == 5) {
        btn5.value = '高级设计师-刘丽萍';
      }else if(this.index == 6) {
        btn5.value = '高级设计师-王星晖';
      }else if(this.index == 7) {
        btn5.value = '高级设计师-赵双喜';
      }else if(this.index == 8) {
        btn5.value = '高级设计师-钟祥贵';
      }else if(this.index == 9) {
        btn5.value = '高级设计师-刘志航';
      }
    }
  }

  //  设计师边框

};