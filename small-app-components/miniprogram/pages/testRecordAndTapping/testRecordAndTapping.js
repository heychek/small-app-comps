Page({
  data: {
    isStart: false,
    filePath: '',
    recordTime: 0
  },

  onLoad: function (options) {

  },

  getRecordTempFile(e) {
    console.log('getRecordTempFile result is', {
      tempFilePath: e.detail.tempFilePath,
      totalSecond: e.detail.totalSecond
    })
    this.setData({
      filePath: e.detail.tempFilePath,
      recordTime: e.detail.totalSecond
    })
  },

  tappingHandle() {
    this.setData({
      isStart: !this.data.isStart
    })
  }
})