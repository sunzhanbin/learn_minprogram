// components/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement() {
      console.log('click');
      // 发射事件
      // triggerEvent 参数2为需要传递的参数
      this.triggerEvent('increment', {name: '刘雅丽'});
    }
  }
})
