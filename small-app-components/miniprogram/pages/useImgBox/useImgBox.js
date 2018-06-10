const img = 'https://raw.githubusercontent.com/hckisagoodboy/imgs/master/MarkdownPhotos/mathstudy/gexingchengfa.jpeg'


Page({
  data: {
    img: img
  },

  onLoad: function () {

  },

  delImg(e) {
    console.log('delImg in use', e.detail)
  },

  preview(e) {
    console.log('preview in use', e.detail)
    const current = e.detail.url
    wx.previewImage({
      current,
      urls: [current]
    })
  },

  methods: {
    
  }
})