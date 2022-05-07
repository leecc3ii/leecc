Page({
// 页面的初始数据  
data: {
    select: false,
    city_name: "--请选择--",
    city: [ '兰州', '嘉峪关', '金昌', '白银', '天水', '酒泉', '张掖', '武威', '定西', 
    '陇南', '平凉', '庆阳', '甘南', '临夏'],
   
  },
  
//点击下拉框 
  bindShowMsg() {    
      this.setData({
      select: !this.data.select
    })
  },

  //   / * 已选下拉框 */
  mySelect(e) 
  {
    console.log(e)    
    var name = e.currentTarget.dataset.name    
    this.setData({
      city_name: name,
      project_name:name,
      select: false
    })
  }
})
