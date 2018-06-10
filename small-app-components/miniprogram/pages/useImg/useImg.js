var plugin = requirePlugin("myPlugin")
Page({
  data: {
    img: 'https://raw.githubusercontent.com/hckisagoodboy/imgs/master/MarkdownPhotos/mathstudy/gexingchengfa.jpeg'
  },

  onLoad: function () {
    console.log(plugin.defaultImg)
  },

  changeSrc: function () {
    this.setData({
      img: ''
    })
  },

  methods: {

  }
})