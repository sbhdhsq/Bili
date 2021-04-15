Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: [
      {
        iconUrl: '../../images/partition/fanju.png',
        name: '番剧'
      }, {
        iconUrl: '../../images/partition/guochuang.png',
        name: '国创'
      }, {
        iconUrl: '../../images/partition/documentary.png',
        name: '纪录片'
      }, {
        iconUrl: '../../images/partition/animation.png',
        name: '动画'
      }, {
        iconUrl: '../../images/partition/music.png',
        name: '音乐'
      }, {
        iconUrl: '../../images/partition/dance.png',
        name: '舞蹈'
      }, {
        iconUrl: '../../images/partition/game.png',
        name: '游戏'
      }, {
        iconUrl: '../../images/partition/knowledge.png',
        name: '知识'
      }, {
        iconUrl: '../../images/partition/digital.png',
        name: '数码'
      }, {
        iconUrl: '../../images/partition/live.png',
        name: '生活'
      }, {
        iconUrl: '../../images/partition/food.png',
        name: '美食'
      }, {
        iconUrl: '../../images/partition/animal.png',
        name: '动物圈'
      }, {
        iconUrl: '../../images/partition/guichu.png',
        name: '鬼畜'
      }, {
        iconUrl: '../../images/partition/fashion.png',
        name: '时尚'
      }, {
        iconUrl: '../../images/partition/recreation.png',
        name: '娱乐'
      }, {
        iconUrl: '../../images/partition/yingshi.png',
        name: '影视'
      }, {
        iconUrl: '../../images/partition/film.png',
        name: '电影'
      }, {
        iconUrl: '../../images/partition/TV.png',
        name: '电视剧'
      }, {
        iconUrl: '../../images/partition/game-competiton.png',
        name: '游戏赛事'
      }, 
    ],
  },
  
  goTo:function(e){
    if ("番剧"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/bangumi/bangumi',
      })
    }

    if ("国创"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/aimtron/aimtron',
      })
    }

    if ("纪录片"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/documentary/documentary',
      })
    }

    if ("动画"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/cartoon/cartoon',
      })
    }

    if ("音乐"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/music/music',
      })
    }

    if ("舞蹈"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/dance/dance',
      })
    }

    if ("游戏"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/game/game',
      })
    }

    if ("知识"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/knowledge/knowledge',
      })
    }

    if ("数码"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/digital/digital',
      })
    }

    if ("生活"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/life/life',
      })
    }

    if ("美食"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/food/food',
      })
    }

    if ("动物圈"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/animal/animal',
      })
    }

    if ("鬼畜"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/ghost/ghost',
      })
    }

    if ("时尚"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/fashion/fashion',
      })
    }

    if ("娱乐"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/amusement/amusement',
      })
    }

    if ("影视"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/movie/movie',
      })
    }

    if ("电影"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/film/film',
      })
    }

    if ("电视剧"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/teleplay/teleplay',
      })
    }

    if ("游戏赛事"==e.currentTarget.dataset.text){
      wx.navigateTo({
        url: '../../partitionpage/gameEvents/gameEvents',
      })
    }

  },

   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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