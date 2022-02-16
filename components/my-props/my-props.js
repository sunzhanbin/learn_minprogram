// components/my-props/my-props.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title: String
    title: {
      type: String,
      value: '北京仁科互动网络科技有限公司',
      observer: function(newVal, oldVal) { // 监听属性的变化
        console.log('newVal', newVal);
        console.log('oldVal', oldVal);
      }
    }
  },
  externalClasses: ['header_bg'],
 
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
