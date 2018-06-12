Page({
  data: {
    isPopShow: false
  },

  hidePop() {
    this.setData({
      isPopShow: false
    })
  },

  showPop() {
    this.setData({
      isPopShow: true
    })
  }
})