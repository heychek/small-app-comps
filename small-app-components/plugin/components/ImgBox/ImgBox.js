import { img404, isStrNull, modal } from '../utils.js'

const DEL_ICON = 'http://p92sv5qma.bkt.clouddn.com/assets/message_dele_icon_n.svg'

Component({
  properties: {
    url: {
      type: String,
      value: img404
    },
    isDelShow: {
      type: Boolean,
      value: false
    },
    width: {
      type: Number,
      value: 212
    },
    height: {
      type: Number,
      value: 212
    }
  },

  data: {
    DEL_ICON
  },

  methods: {
    preview() {
      const url = this.data.url
      if (!isStrNull(url)) {
        this.triggerEvent('preview', { url })
      }
    },

    delImg() {
      const that = this
      const url = this.data.url
      if (!isStrNull(url)) {
        modal('是否确认删除该图片')
          .then(() => that.triggerEvent('delImg', { url }))
          .catch(() => console.log('cancle'))
      }
    }
  }
})
