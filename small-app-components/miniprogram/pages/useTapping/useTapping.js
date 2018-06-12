Page({
  data: {
    isStart: false
  },

  onLoad: function (options) {
  
  },

  getRecordTempFile(e) {
    console.log('getRecordTempFile result is', { 
      tempFilePath: e.detail.tempFilePath,
      totalSecond: e.detail.totalSecond
    })
  },

  tappingHandle() {
    this.setData({
      isStart: !this.data.isStart
    })
  }
})