Page({
  data: {
    tabs: [{
        index: 0,
        tabName: '初一1班'
      },
      {
        index: 1,
        tabName: '初一2班'
      },
      {
        index: 2,
        tabName: '初一3班'
      },
      {
        index: 3,
        tabName: '初一4班'
      },
      {
        index: 4,
        tabName: '初一5班'
      },
      {
        index: 5,
        tabName: '初一6班'
      }],
    activeIdx: 0,
    options: [
      {
        position: 'left',
        size: 30
      },
      {
        position: 'right',
        size: 30
      }
    ]
  },

  changeTab(e) {
    const activeIdx = e.detail.current
    if (activeIdx !== this.data.activeIdx) {
      this.setData({
        activeIdx
      })
    }
  },

  onLoad: function (options) {

  }
})