// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  homeBtn: function(options){
   wx.switchTab({
      url: '../homePage/homePage',
   })
 },

 backBtn: function(options){
   wx.navigateBack({
     delta: 0,
   })
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.cloud.callFunction({
      name: 'Bili'
    }).then((res) =>{
      console.log(res)
    })
    // wx.request({
    //   url: 'url' +1,
     
    //   success: function(res) {
    //     res.data 
    //  }
    // })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  }
})