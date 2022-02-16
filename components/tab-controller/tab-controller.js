// components/tab-controller/tab-controller.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClickHanddler(event) {
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      });
      this.triggerEvent('tabClick', {index, title: this.properties.tabs[index].label})
    }
  }
})
