// pages/fare_search/fare_search.js
var types = ['default', 'primary', 'warn'];
var dated = new Date();

var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchkey:0,
    isTipError:false,
    errorPar:'123',
    item2:0,
    item3:0,
    listPortN:0,
    listPort:0,
    current_hotPort2:0,
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
      limitStartTime: "2000-05-06",
      limitEndTime: "2255-05-06"
    },
    ovhiBlo:false,
    current_hist:0,
    current_hotPort:0,
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    actionSheetHidden: true,
    title: '起始港',
    title2:'船公司',
    current_item1: 0,
    current_item2: 0,
    shipVal:'',
    dnshow:0,
    currHisList:[
      {
        ename: 'SANTOS',
        zname: '桑托斯'

      }, {
        ename: 'ANTWERP',
        zname: '安特卫普'
      }, {
        ename: 'HAMBURG',
        zname: '汉堡'
      }
    ],
    hotPortList: [{
      ename: 'SANTOS',
      zname: '桑托斯'

    }, {
        ename: 'ANTWERP',
        zname: '安特卫普'
      }, {
        ename: 'HAMBURG',
        zname: '汉堡'
      }],
    qsInputList:[
      {
        title:'起始港',
        val:''
      },{
        title: '目的港',
        val: ''
      }
    ],
    fareList:[{
      title:'起始港选择'

    },{
        title: '目的港选择'
    },{
        title: '船公司选择'
    }],
    fareQsList:[
      {
        ename:'SHANGHAI',
        zname:'上海'

      },{
        ename: 'NINGBO',
        zname: '宁波'
      },{
        ename: 'QINGDAO',
        zname: '青岛'
      }
    ], 
    fareQsHisList: [
      {
        ename: 'SHANGHAI',
        zname: '上海'

      }, {
        ename: 'NINGBO',
        zname: '宁波'
      }, {
        ename: 'QINGDAO',
        zname: '青岛'
      }
    ], 
    hotList:[
      {
        area: '热门/历史'
      },{
      area:'欧洲'
    },{
        area: '港澳台'
    },
      {
        area: '东南亚'
      },
      {
        area: '北美洲'
      },
      {
        area: '南美洲'
      },
      {
        area: '亚洲其他'
      },
      {
        area: '非洲'
      },
      {
        area: '大洋州'
      }],
    hotListCon:[
      { title:'香港',
        ename: 'SHANGHAI',
        zname: '上海'

      },
      {
        title: '香港',
        ename: 'QINGDAO',
        zname: '青岛'
      },
      {
        title: '香港',
        ename: 'SHANGHAI',
        zname: '上海'

      },
      {
        title: '香港',
        ename: 'QINGDAO',
        zname: '青岛'
      },
      {
        title: '澳门',
        ename: 'SHANGHAI',
        zname: '上海'

      }, {
        title: '澳门',
        ename: 'QINGDAO',
        zname: '青岛'
      }, {
        title: '澳门',
        ename: 'SHANGHAI',
        zname: '上海'

      }, {
        title: '台湾',
        ename: 'QINGDAO',
        zname: '青岛'
      }, 
      {
        title: '台湾',
        ename: 'SHANGHAI',
        zname: '上海'

      }, {
        title: '台湾',
        ename: 'QINGDAO',
        zname: '青岛'
      },{
        title: '台湾',
        ename: 'QINGDAO',
        zname: '青岛'
      },
      {
        title: '台湾',
        ename: 'SHANGHAI',
        zname: '上海'

      }, {
        title: '台湾',
        ename: 'QINGDAO',
        zname: '青岛'
      }
    ],
    shipComList:[
      {
        name:'123',
        imgurl:'../../images/img01.png'
      },
      {
        name: '13',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1234',
        imgurl: '../../images/img01.png'
      },

      {
        name: '1235',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1236',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1237',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1238',
        imgurl: '../../images/img01.png'
      },
      {
        name: '123',
        imgurl: '../../images/img01.png'
      },
      {
        name: '13',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1234',
        imgurl: '../../images/img01.png'
      },

      {
        name: '1235',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1236',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1237',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1238',
        imgurl: '../../images/img01.png'
      },
       {
        name:'123',
        imgurl:'../../images/img01.png'
      },
      {
        name: '13',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1234',
        imgurl: '../../images/img01.png'
      },

      {
        name: '1235',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1236',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1237',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1238',
        imgurl: '../../images/img01.png'
      },
      {
        name: '123',
        imgurl: '../../images/img01.png'
      },
      {
        name: '13',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1234',
        imgurl: '../../images/img01.png'
      },

      {
        name: '1235',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1236',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1237',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1238',
        imgurl: '../../images/img01.png'
      },
       {
        name:'123',
        imgurl:'../../images/img01.png'
      },
      {
        name: '13',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1234',
        imgurl: '../../images/img01.png'
      },

      {
        name: '1235',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1236',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1237',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1238',
        imgurl: '../../images/img01.png'
      },
      {
        name: '123',
        imgurl: '../../images/img01.png'
      },
      {
        name: '13',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1234',
        imgurl: '../../images/img01.png'
      },

      {
        name: '1235',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1236',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1237',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1238',
        imgurl: '../../images/img01.png'
      },
      {
        name: '123',
        imgurl: '../../images/img01.png'
      },
      {
        name: '13',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1234',
        imgurl: '../../images/img01.png'
      },

      {
        name: '1235',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1236',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1237',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1238',
        imgurl: '../../images/img01.png'
      },
      {
        name: '123',
        imgurl: '../../images/img01.png'
      },
      {
        name: '13',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1234',
        imgurl: '../../images/img01.png'
      },

      {
        name: '1235',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1236',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1237',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1238',
        imgurl: '../../images/img01.png'
      },
      {
        name: '123',
        imgurl: '../../images/img01.png'
      },
      {
        name: '13',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1234',
        imgurl: '../../images/img01.png'
      },

      {
        name: '1235',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1236',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1237',
        imgurl: '../../images/img01.png'
      },
      {
        name: '1238',
        imgurl: '../../images/img01.png'
      },
      
      {
        name: '1239',
        imgurl: '../../images/img01.png'
      }
    ],
    hotList2:[],
    jsonList:[
      { cname: '香港', pId: '1', ename:"n1",cId: '11' },
      { cname: '香港', pId: '1', ename:"n2",cId: '12' },
      { cname: '台湾', pId: '1', ename:"t1", cId: '21' },
      { cname: '台湾', pId: '1', ename:"t2", cId: '22' },
      { cname: '澳门', pId: '1', ename:"a1", cId: '31' },
      { cname: '澳门', pId: '1', ename:"a2", cId: '32' },
      { cname: '香港', pId: '2', ename: "n12", cId: '11' },
      { cname: '香港', pId: '2', ename: "n22", cId: '12' },
      { cname: '台湾', pId: '2',  ename: "t12", cId: '21' },
      { cname: '台湾', pId: '2',  ename: "t22", cId: '22' },
      { cname: '澳门', pId: '2',  ename: "a12", cId: '31' },
      { cname: '澳门', pId: '2',  ename: "a22", cId: '32' },
      { cname: '香港', pId: '3', ename: "n123", cId: '11' },
      { cname: '香港', pId: '3', ename: "n223", cId: '12' },
      { cname: '台湾', pId: '3',  ename: "t123", cId: '21' },
      { cname: '台湾', pId: '3',  ename: "t223", cId: '22' },
      { cname: '澳门', pId: '3',  ename: "a123", cId: '31' },
      { cname: '澳门', pId: '3',  ename: "a223", cId: '32' },  
    ],
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
    var i = new Date();
    var il = util.formatTime(i);
    var il2 = util.formatTime2(i);
    console.log(222,il,il2)
    
    this.searchbar = this.selectComponent('#searchbar');
    this.setData({
      ['pickerConfig.initStartTime']:il,
      ['pickerConfig.initEndTime']:il2,
      current_item2: this.data.fareQsList.length + 1,
      current_hotPort: this.data.hotPortList.length + 1,

    })
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

  },

    
  showView(pro) {
    
    let location = pro.currentTarget.dataset.location
    let key = pro.currentTarget.dataset.key
    console.log(pro.currentTarget.dataset)
    if(key == 0){
      this.setData({
        //dnshow:key
        searchkey: 0
      })
    } else if (key == 1){
      this.setData({
        //dnshow
        searchkey: 1
      })
    } else if (key == 2){
      this.setData({
        //dnshow
      })
    }
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "ease",
      delay: 10
    })
    this.animation = animation
    animation.translateY(500).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true,
      ovhiBlo:true,
      dnshow: key,
      title: location+'选择'
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },

  hideModal: function () {
    this.hideView();
  },

  hideView() {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      ovhiBlo: false,
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  clicked(e){
    var that = this;
    let cuu = e.currentTarget.dataset.key;//获取index值
    
    var data = that.data.fareQsHisList;
    var valn = data[cuu].ename;
    var name = that.data.qsInputList;
    let vnames = 'qsInputList[0].val';
    that.setData({
      current_item1: cuu,
      [vnames]: valn,
      
      current_item2: that.data.fareQsList.length+1
    })
    console.log(e,cuu, name, vnames, valn);
    that.hideModal()

  },
  clicked2(e){
    var that = this;
    let cuu = e.currentTarget.dataset.key;//获取index值
    var data = that.data.fareQsList;
    var valn = data[cuu].ename;
    let vnames = 'qsInputList[0].val';
    console.log(cuu,valn);
    that.setData({
      current_item2: cuu,
      [vnames]: valn,
     
      current_item1: that.data.fareQsHisList.length + 1
    })
    that.hideModal()

  },
  clicked3(e) {
    var that = this;
    let cuu = e.currentTarget.dataset.key;//获取index值
    var data = that.data.currHisList;
    console.log(e, data);
    var valn = data[cuu].ename;
    let vnames = 'qsInputList[1].val';
    console.log(cuu, valn);
    that.setData({
      current_hist: cuu,
      [vnames]: valn,
      current_hotPort: that.data.hotPortList.length + 1
    })
    that.hideModal()

  },
  clicked4(e) {
    var that = this;
    let cuu = e.currentTarget.dataset.key;//获取index值
    var data = that.data.hotPortList;
    var valn = data[cuu].ename;
    let vnames = 'qsInputList[1].val';
    console.log(cuu, valn);
    that.setData({
      current_hotPort: cuu,
      [vnames]: valn,

      current_hist: that.data.currHisList.length + 1
    })
    that.hideModal()

  },
  clicked5(e) {
    var that = this;
    let cuu = e.currentTarget.dataset.key;//获取index值
    var data = that.data.shipComList;
    var valn = data[cuu].name;
    let vnames = 'qsInputList[1].val';
    console.log(cuu, valn);
    that.setData({
      current_hotPort2: cuu,
      shipVal: valn,
    })
    that.hideModal()

  },
  test1(arr) {
    var that = this;
    that.arr = arr;
    let pNameMap = new Map();
    arr.forEach(x => {
      if (!pNameMap.has(x.pId)) {
        pNameMap.set(x.pId, {
          pId: x.pId,
          cityList: []
        })
      }
      pNameMap.get(x.pId).cityList.push({
        cname: x.cname,
        ename: x.ename,
        cId: x.cId
      })
    })
    return Array.from(pNameMap.values())
  }, 

test2 (arr) {
  var that = this;
  that.arr = arr;
    let pNameMap = new Map();
    arr.forEach(x => {
      if (!pNameMap.has(x.cname)) {
        pNameMap.set(x.cname, {
          cname: x.cname,
          pId: x.pId,
          cityList: []
        })
      }
      pNameMap.get(x.cname).cityList.push({
        cname: x.cname,
        ename: x.ename,
        cId: x.cId
      })
    })
    return Array.from(pNameMap.values())
  }, 
  showListPort(e) {
    var that = this;
    let cuu = e.currentTarget.dataset.key;//获取index值
    var data = that.data.jsonList;
    var dataSon = that.test1(data);
    let icuu = cuu-1<0?0:cuu-1;
    var dataSs = that.test2(dataSon[icuu].cityList);
    console.log(cuu, dataSon, dataSs);
    that.setData({
      hotList2:'',
      listPort: cuu,
      listPortN: cuu,
      //shipVal: valn,
      hotList2: dataSs
    })
    console.log(cuu, dataSon, dataSs);

  },
  clicked131(e){
    var that = this;
    let cuu = e.currentTarget.dataset.key;//获取index值
    console.log(112,cuu)
    that.setData({
      item3: cuu
      
      //shopitem: classify
      //current_hotPort: that.data.hotPortList.length + 1
    })
  },
  clicked13(e) {
    var that = this;
    let cuu = e.currentTarget.dataset.key;//获取index值
    let it = e.currentTarget.dataset.item;//获取index值
    //var classify = e.currentTarget.dataset.classify;
    var data = that.data.hotList2;
    console.log(22,it,e, data);
    var valn = data[cuu].ename;
    let vnames = 'qsInputList[1].val';
    console.log(cuu, valn);
    that.setData({
      item2: cuu,
      [vnames]: it.ename,
      //shopitem: classify
      //current_hotPort: that.data.hotPortList.length + 1
    })
    that.hideModal()

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
  navigatorGo(){
    var that= this;
    
    var data = that.data.qsInputList;
    var value1 = data[0].val;
    var value2 = data[1].val;
    console.log(that.data.startTime)
    if (value1 == ''){
      that.setData({
        isTipError:true,
        errorPar: '请选择起始港'
      });
      setTimeout(function () {
        that.setData({ isTipError: false })
      }, 1200)
      return false;
    } else if (value2 == ''){
      that.setData({
        isTipError: true,
        errorPar: '请选择目的港'
      });
      setTimeout(function () {
        that.setData({ isTipError: false })
      }, 1200)
      return false;
    } else if (that.data.startTime == '' && that.data.endTime == '') {
      that.setData({
        isTipError: true,
        errorPar: '请选择出运时间'
      });
      setTimeout(function () {
        that.setData({ isTipError: false })
      }, 1200)
      return false;
    } else{
      wx.navigateTo({
        url: '../search_end/search_end'
      })
    }
    
    
  },
  searchInfo(e){
    console.log(e.detail)
    var that = this;
    if (e.detail.index == 0){
      let vnames = 'qsInputList[0].val';
      that.setData({
        [vnames]: e.detail.ename,
        //shopitem: classify
        //current_hotPort: that.data.hotPortList.length + 1
      })
      that.hideModal()
    } else if (e.detail.index == 1){
      let vnames = 'qsInputList[1].val';
      that.setData({
        [vnames]: e.detail.ename,
        //shopitem: classify
        //current_hotPort: that.data.hotPortList.length + 1
      })
      that.hideModal()
    }
  }
  
})