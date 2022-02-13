// app.js 注册小程序实例
App({
  onLaunch() {
    console.log('小程序初始化')
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
      }
    })

  },

  onShow: (options) =>{
    // options.scene 小程序的代开场景
    console.log(options);
  },

  globalData: {
    userInfo: null,
    username: 'yuan',
    age: 30
  }
})
