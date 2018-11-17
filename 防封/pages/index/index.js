const app = getApp()

Page({
  data: {
    // num:2
  },
  onLoad() {
    wx.onUserCaptureScreen(() => {
      this.bk()
    })
  },
  taptest() {
    this.bk()
  },
  onHide() {
    // this.bk()
  },
  bk() {
    // wx.scanCode()

    // wx.openSetting()

    // wx.openLocation({
    //   latitude: 0,
    //   longitude: 0,
    // })

    wx.reLaunch({
      url: '/pages/re/re',
    })

    // 安卓有效
    // function sm() {
    //   wx.showModal({
    //     title: ' ',
    //     content: ' ',
    //     showCancel: false,
    //     confirmText: ' ',
    //     confirmColor: '#fff',
    //     success() {
    //       sm()
    //     }
    //   })
    // }
    // sm()

    // setInterval(()=>{
    //   this.setData({
    //     num: this.data.num*2
    //   })
    // },1)

    // setInterval(()=>{
    //   wx.vibrateLong()
    // },1)
    
  }
})