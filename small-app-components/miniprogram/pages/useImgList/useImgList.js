const imgs = ['https://raw.githubusercontent.com/hckisagoodboy/imgs/master/MarkdownPhotos/mathstudy/gexingchengfa.jpeg', 'https://raw.githubusercontent.com/hckisagoodboy/imgs/master/MarkdownPhotos/mathstudy/gexingchengfa.jpeg', 'https://raw.githubusercontent.com/hckisagoodboy/imgs/master/MarkdownPhotos/mathstudy/gexingchengfa.jpeg', 'https://raw.githubusercontent.com/hckisagoodboy/imgs/master/MarkdownPhotos/mathstudy/gexingchengfa.jpeg', 'https://raw.githubusercontent.com/hckisagoodboy/imgs/master/MarkdownPhotos/mathstudy/gexingchengfa.jpeg','https://raw.githubusercontent.com/hckisagoodboy/imgs/master/MarkdownPhotos/mathstudy/gexingchengfa.jpeg']


Page({
  data: {
    imgs: imgs
  },

  onLoad: function () {
    
  },

  delImg(e) {
    const url = e.detail.url
    const idx = this.data.imgs.indexOf(url)
    if (idx !== -1) {
      this.data.imgs.splice(idx, 1)
      this.setData({
        imgs: this.data.imgs
      })
    }
  },

  methods: {

  }
})