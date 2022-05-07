var types = ['default', 'primary', 'warn']
Page({
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  jumpPage:function(){
    wx.jumpPage({
      url: "/pages/diaob/diaob",
    })
  },
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  onDefaultButtonClick: function(param){
     wx.switchTab({
       url: '../diaob/diaob'
     })
  }
})
