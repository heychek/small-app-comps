Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    width: {
      type: Number,
      value: 600,
      observer: 'widthWatcher'
    },
    height: {
      type: Number,
      value: 100,
      observer: 'heightWatcher'
    },
    activeIdx: {
      type: Number,
      value: 0
    }
  },

  data: {
    width_: 600,
    height_: 50,
    needCenter: false
  },

  methods: {
    heightWatcher(height_) {
      let res = height_
      if (height_ < 50) {
        res = 50
      }
      if (height_ > 120) {
        res = 120
      }
      this.setData({
        height_: res
      })
      changeNeedCenter()
    },

    widthWatcher(width_) {
      let res = width_
      if (width_ < 150) {
        res = 150
      }
      if (width_ > 750) {
        res = 750
      }
      this.setData({
        width_: res
      })
      changeNeedCenter()
    },

    chooseTab(e) {
      const current = e.currentTarget.dataset.idx
      this.triggerEvent('changeTab', { current })
    },

    changeNeedCenter() {
      const len = this.data.tabs.length
      const totalWidth = len * 140 + (len - 1) * 80
      if (totalWidth < this.data.width_) {
        this.setData({
          needCenter: true
        })
      }
    }
  },

  attached() {
    this.changeNeedCenter()
  }
})
