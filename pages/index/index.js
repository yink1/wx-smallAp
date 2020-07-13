//index.js
//获取应用实例
const app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red'];
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isPickerRender: false,
    isPickerShow: false,
    startTime: "",
    endTime: "",
    pickerConfig: {
      endDate: true,
      column: "second",
      dateLimit: true,
      initStartTime: "2019-01-01",
      initEndTime: "2019-12-01",
      limitStartTime: "2015-05-06",
      limitEndTime: "2055-05-06"
    },
    grids:[{
      url:'baidu.com',
      imgUrl:'../../images/box1.png',
      title:'运价查询'
    },
      {
        url: 'baidu.com',
        imgUrl: '../../images/box2.png',
        title: '账单中心'
      },
      {
        url: 'baidu.com',
        imgUrl: '../../images/box3.png',
        title: '订单追踪'
      },
      {
        url: 'baidu.com',
        imgUrl: '../../images/box4.png',
        title: '我的运价'
      },
      {
        url: 'baidu.com',
        imgUrl: '../../images/box5.png',
        title: '单证中心'
      },
      {
        url: 'baidu.com',
        imgUrl: '../../images/box6.png',
        title: '在线订舱'
      }
    ],
    imgTitle: [
      {
        url: 'baidu.com',
        title: '上海石化为应对原油价格波动采取措施'
      }, {
        url: 'baidu.com',
        title: '今年前4个月宁波口岸进出口额超5000亿元'
      }, {
        url: 'baidu.com',
        title: '澎湃新动能让中国经济更强劲'
      }, {
        url: 'baidu.com',
        title: '上海石化为应对原油价格波动采取措施'
      }, {
        url: 'baidu.com',
        title: '澎湃新动能让中国经济更强劲'
      }, {
        url: 'baidu.com',
        title: '上海石化为应对原油价格波动采取措施'
      }
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  pickerShow: function () {
    this.setData({
      isPickerShow: true,
      isPickerRender: true,
      chartHide: true
    });
  },
  pickerHide: function () {
    this.setData({
      isPickerShow: false,
      chartHide: false
    });
  },

  bindPickerChange: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    console.log(this.data.sensorList);

    this.getData(this.data.sensorList[e.detail.value].id);
    // let startDate = util.formatTime(new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 7));
    // let endDate = util.formatTime(new Date());
    this.setData({
      index: e.detail.value,
      sensorId: this.data.sensorList[e.detail.value].id
      // startDate,
      // endDate
    });
  },
  setPickerTime: function (val) {
    console.log(val);
    let data = val.detail;
    console.log(222, data);
    let data1 = Object.assign({}, {
      startTime: data.startTime.slice(5, 10),
      endTime: data.endTime.slice(5, 10)
    })
    this.setData({
      startTime: data1.startTime,
      endTime: data1.endTime
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
