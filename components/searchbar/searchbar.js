Component({
  myProperty: {
    inputShowed2: String,
        inputVal: "",
    
        //searchkey:''
    },
  properties:{
    searchkey: {
      type: String
    }
  },
    data:{
      inputShowed: false,
      fareQsList: [
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
      ]
    },
    methods:{
    showInput: function () {
        this.setData({
            inputShowed: true,
            
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
      
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
      //console.log(222, e, this.properties.searchkey)
        this.setData({
            inputVal: e.detail.value
        });
      
    },
      clickedSon:function(e){
        var that = this;
        let cuu = e.currentTarget.dataset.key;//获取index值

        var data = that.data.fareQsList;
        var valn = data[cuu].ename;
        console.log(222, e, this.properties.searchkey, data, valn)
        this.triggerEvent('searchInfo', { index: this.properties.searchkey,ename: valn })
      }
    }
});