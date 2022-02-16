// components/my-multi-slot/my-multi-slot.js
Component({
  // -------定义组件的配置选项--------
  options:{
    multipleSlots: true, // 在组件内部使用多插槽
    styleIsolation: 'isolated', // 样式的隔离方式
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 外界给组价传入额外的样式
  externalClasses: [],
  // 监听properties和data的改变
  observers: {
    counter: function(newVal) {
      console.log(newValue)
    }
  },

  // ----------组建中监听生命周期函数----------
  // 1. 监听所在页面的生命周期
  pageLifetimes: {
    show: function() {
      console.log('监听组件所在页面显示出来的时候')
    },
    hide: function(){
      console.log('监听组件所在页面隐藏起来时');
    },
    resize: function() {
      console.log('监听页面尺寸改变时');
    }
  },

  // 2. 监听组件本身的生命周期
  lifetimes: {
    created: function() {
      console.log('监听组件被创建出来的时候');
    },
    attached: function() {
      console.log('监听组件被添加到页面的时候');
    },
    ready: function() {
      console.log('组件被渲染出来的时候');
    },
    detached: function() {
      console.log('组件被移除的时候');
    }
  }
})
