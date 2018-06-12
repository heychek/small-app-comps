Component({
  properties: {
    isPopShow: {
      type: Boolean,
      value: false,
      observer: 'changeShowStatus'
    },
    popHeight: {
      type: String,
      value: '500rpx'
    },
    popWidth: {
      type: String,
      value: '500rpx'
    },
    canCancleInBlank: {
      type: Boolean,
      value: true
    }
  },

  data: {
    isPopShow_: false,
    isFirstTime: true
  },

  attached: function () {
    this.popAnimation = wx.createAnimation({
      delay: 0,
      transformOrigin: 'left top 50%'
    });
    this.bgAnimation = wx.createAnimation({
      delay: 0,
      transformOrigin: 'left top 50%'
    });
  },

  methods: {
    changeShowStatus: function () {
      if (this.data.isPopShow) {
        this.showPop();
      } else if (!this.data.isPopShow) {
        this.hidePop();
      }
    },

    showPop: function () {
      this.popAnimation.scale(0, 0).step({ duration: 1 });
      this.popAnimation.scale(1.1, 1.1).step({ duration: 180, timingFunction: 'linear' });
      this.popAnimation.scale(0.95, 0.95).step({ duration: 80, timingFunction: 'linear' });
      this.popAnimation.scale(1, 1).step({ duration: 60, timingFunction: 'linear' });
      this.bgAnimation.backgroundColor('rgba(0, 0, 0, 0.8)').step({ duration: 10 });
      this.setData({
        popAnimation: this.popAnimation.export(),
        bgAnimation: this.bgAnimation.export()
      });
    },

    hidePop: function () {
      this.setData({ isPopShow: false });
    },

    hidePopBound: function () {
      if (this.data.canCancleInBlank) {
        this.setData({ isPopShow: false });
        this.triggerEvent('hidePop', { isPopShow: false });
      }
    },

    catchForNotHide: function () {
      console.log("do nothing")
    }
  }
})
