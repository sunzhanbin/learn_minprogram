// components/my-cpn/my-cpn.js
Component({
  options: {
    // isolated 样式隔离  apply-shared 父组件影响子组件 样式相互影响
    styleIsolation: 'shared',
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '我是标题'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
