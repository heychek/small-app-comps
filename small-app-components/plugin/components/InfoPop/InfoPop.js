Component({
  properties: {
    isPopShow: {
      type: Boolean,
      value: true
    },
    popHeight: {
      type: String,
      value: '500rpx'
    },
    popWidth: {
      type: String,
      value: '500rpx'
    }
  },

  data: {
    isShow: true
  },

  methods: {
    hidePop: function () {
      this.triggerEvent('hidePop');
    },

    catchForNotHide: function () {
      console.log("do nothing")
    }
  }
})
