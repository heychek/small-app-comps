Page({
  data: {
    isPopShow: false
  },

  showPop() {
    this.setData({
      isPopShow: true
    })
  },

  hidePop() {
    this.setData({
      isPopShow: false
    })
  }
})