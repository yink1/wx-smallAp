// pages/search_end/search_end.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 200,
    searchList:[
      
      {
        imgLogo:'../../images/img02.png',
        shipDate:'3/5 5/6 5/7',
        voyage:'5天/4天/3天',
        price20:'$1550',
        price40: '$1550',
        shipPort:'北三集 DIRECT',
        date:'03-15至03-31'
      },
      {
        imgLogo: '../../images/img02.png',
        shipDate: '3/5 5/6 5/7',
        voyage: '5天/4天/3天',
        price20: '$1550',
        price40: '$1550',
        shipPort: '北三集 DIRECT',
        date: '03-15至03-31'
      }, {
        imgLogo: '../../images/img02.png',
        shipDate: '3/5 5/6 5/7',
        voyage: '5天/4天/3天',
        price20: '$1550',
        price40: '$1550',
        shipPort: '北三集 DIRECT',
        date: '03-15至03-31'
      }, {
        imgLogo: '../../images/img02.png',
        shipDate: '3/5 5/6 5/7',
        voyage: '5天/4天/3天',
        price20: '$1550',
        price40: '$1550',
        shipPort: '北三集 DIRECT',
        date: '03-15至03-31'
      }, {
        imgLogo: '../../images/img02.png',
        shipDate: '3/5 5/6 5/7',
        voyage: '5天/4天/3天',
        price20: '$1550',
        price40: '$1550',
        shipPort: '北三集 DIRECT',
        date: '03-15至03-31'
      }, {
        imgLogo: '../../images/img02.png',
        shipDate: '3/5 5/6 5/7',
        voyage: '5天/4天/3天',
        price20: '$1550',
        price40: '$1550',
        shipPort: '北三集 DIRECT',
        date: '03-15至03-31'
      }, {
        imgLogo: '../../images/img02.png',
        shipDate: '3/5 5/6 5/7',
        voyage: '5天/4天/3天',
        price20: '$1550',
        price40: '$1550',
        shipPort: '北三集 DIRECT',
        date: '03-15至03-31'
      }, {
        imgLogo: '../../images/img02.png',
        shipDate: '3/5 5/6 5/7',
        voyage: '5天/4天/3天',
        price20: '$1550',
        price40: '$1550',
        shipPort: '北三集 DIRECT',
        date: '03-15至03-31'
      }
    ]

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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    wx.showToast({
      title: '数据刷新中...',
      image: '../../images/logo.png',
    })
    var self = this;
   setTimeout(() => {
      // 模拟请求数据，并渲染
      var arr = self.data.searchList; //, max = Math.max(...arr);
      //for (var i = max + 1; i <= max + 3; ++i) {
      //  arr.unshift(i);
      //}
      self.setData({ searchList: arr });
      // 数据成功后，停止下拉刷新
      wx.stopPullDownRefresh();
     wx.hideNavigationBarLoading()
    }, 500);
    
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(2)
    wx.showToast({
      title: '数据加载中...',
      image: '../../images/logo.png',
    })
    var self = this;
    setTimeout(() => {
      // 模拟请求数据，并渲染
      var arr = self.data.searchList[0]; //, max = Math.max(...arr);
      console.log(arr, self.data.searchList.length)
      //for (var i = max + 1; i <= max + 3; ++i) {
      //  arr.unshift(i);
      //}
      //list: this.data.list.concat(newarray)
      self.setData({ searchList: self.data.searchList.concat(arr) });
      
      
    }, 500);

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goback() {
    
    wx.navigateBack({
      delta: 1,  // 返回上一级页面。
      success: function () {
        console.log('成功！')
      }
    })
  }
})