var plugin = requirePlugin("myPlugin")
Page({
  data: {
    img:  'https://raw.githubusercontent.com/hckisagoodboy/imgs/master/MarkdownPhotos/mathstudy/gexingchengfa.jpeg'
  },

  onLoad: function() {
    console.log(plugin.defaultImg)
  },

  turnToPage(e) {
    const page = e.currentTarget.dataset.page
    wx.navigateTo({
      url: `/pages/${page}/${page}`,
    })
  },

  methods: {

  }
})