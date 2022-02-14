// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World sunbinbin',
    age: '18',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    stars: [
      {id: '110', name: 'lilianjie', age: 58},
      {id: '111', name: 'gongli', age: 28},
      {id: '112', name: 'fanbingbing', age: 38},
      {id: '113', name: 'tangwei', age: 38},
    ],
    counter: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    // 异步调用  数据拿到之后再回调
    wx.getUserProfile({
      desc: '获取微信用户信息',
      success: (res) => {
        if(res.errMsg === 'getUserProfile:ok') {
          console.log(res.userInfo);
        }
      },
      fail: (err) => {
        console.log('>>>>>>err>>>>>>>')
        console.log(err)
      }
    })
  },
  btnHandlerClick() {
    let { counter } = this.data;
    counter += 2;
    this.setData({
      counter
    })
  }
})
