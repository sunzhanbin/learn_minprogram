// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prods: ['衣服', '裤子', '鞋子']
  },

  handlerBtnClick() {
    console.log('触发了点击事件');
  },

  handlerTouchstart(){
    console.log('handlerTouchstart');
  },

  handlerTouchmove(){
    console.log('handlerTouchmove');
  },

  handlerTouchend(){
    console.log('handlerTouchend');
  },
  
  handlerTop() {
    console.log('handlerTop');
  },

  handlerLongpress() {
    console.log('handlerLongpress');
  },

  handlerEventClick(event) {
    // currentTarget 表示的是当前产生事件的对象
    // current 表示的是当前处罚事件的对象
    // dataset 里面携带的是事件传递过来的参数
    console.log(event);
  },

  // 事件冒泡和事件不会
  handlerCaptureView1() {
    console.log('handlerCaptureView1');
  },

  handBindViwe1() {
    console.log('handBindViwe1');
  },

  handlerCaptureView2() {
    console.log('handlerCaptureView2');
  },

  handBindViwe2() {
    console.log('handBindViwe2');
  },
  
  handlerCaptureView3() {
    console.log('handlerCaptureView3');
  },

  handBindViwe3() {
    console.log('handBindViwe3');
  },
})