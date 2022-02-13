// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    albumSrc: ''
  },

  handlerChooseAlbum() {
    console.log('>>>>>>>>>>>>')
    // 系统API  让用户从相册中选择照片或是拍照
    const _this = this;
    console.log(this)
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        console.log(res);
        _this.setData({
          albumSrc: res.tempFilePaths[0]
        })
      }
    })
  },

  handlerImageLoad() {
    console.log('图片加载完成')
  }

})