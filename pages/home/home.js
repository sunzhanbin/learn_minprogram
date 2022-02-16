// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD

  },


=======
    companyName: '华为科技服务有限公司',
    counter: 0,
    show: true,
    tabs: [
      {
        label: '流行',
        id: 1
      }, {
        label: '新款',
        id: 2
      }, {
        label: '精选',
        id: 3
      }, {
        label: '帽子',
        id: 4
      }
    ]
  },

>>>>>>> feat: 组件化开发
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
    console.log('onLoad');
=======

>>>>>>> feat: 组件化开发
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
<<<<<<< HEAD
    console.log('onReady')
=======

>>>>>>> feat: 组件化开发
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
<<<<<<< HEAD
    console.log('onShow')
=======

>>>>>>> feat: 组件化开发
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
<<<<<<< HEAD
    console.log('onHide')
=======

>>>>>>> feat: 组件化开发
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

<<<<<<< HEAD
=======
  },

  changeCompanyName() {
    this.setData({
      companyName: '北京仁科互动网络公司西安分公司'
    })
  },

  handlerIncrement() {
    let { counter } = this.data;
    this.setData({
      counter: counter + 1
    })
  },
  handlerTabClick(event) {
    console.log(event.detail);
  },

  handlerIncrementCpn() {
    //修改ma-select组件内部的数据
    // 1.1 获取组件
    const mySelect = this.selectComponent('#select');
    // mySelect.setData({
    //   counter: mySelect.data.counter + 20
    // })

    // 1.2 通过调用组件内部的方法修改组件内部的数据
    mySelect.incrementNumber(10);
  },
  handlerChangeShow() {
    this.setData({
      show: !this.data.show
    })
>>>>>>> feat: 组件化开发
  }
})