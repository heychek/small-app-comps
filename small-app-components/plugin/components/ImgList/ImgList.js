import { isObjNull, noIconTost } from '../utils.js'
import {
  rootHeightType,
  ROOT_LOW_TYPE_LENGTHS,
  getValidUrls,
  dealInValidLen,
  rootSizeInitor
} from './utils.js'

Component({
  properties: {
    urls: {
      type: Array,
      value: [],
      observer: 'initSizeWithList'
    },
    isDelShow: {
      type: Boolean,
      value: false
    },
    boxSize: {
      type: Number,
      value: 213
    },
    boxSpace: {
      type: Number,
      value: 16
    }
  },

  data: {
    rootHeight: 442,
    rootWidth: 671,
    boxWidth: 213,
    boxHeight: 213
  },

  methods: {
    delImg(e) {
      this.triggerEvent('delImg', { url: e.detail.url })
    },

    preview(e) {
      const current = e.detail.url
      const urls = getValidUrls(this.data.urls)
      wx.previewImage({
        current,
        urls
      })
    },

    initSizeWithList() {
      this.initUrlList()
      this.initRootSize()
      this.initBoxSize()
    },

    initUrlList() {
      const len = dealInValidLen(this.data.urls)
      if (len > 6) {
        noIconTost('图片已超过6张，只显示前6张')
        this.setData({
          urls: this.data.urls.slice(0, 6)
        })
      }
    },

    initRootSize() {
      const len = dealInValidLen(this.data.urls)
      rootSizeInitor[`len${len}`](this)
    },

    initBoxSize() {
      const len = this.data.urls.length
      if (len === 1) {
        this.setData({
          boxHeight: this.data.rootHeight,
          boxWidth: this.data.rootWidth
        })
        return
      }
      this.setData({
        boxHeight: this.data.boxSize,
        boxWidth: this.data.boxSize
      })
    }
  }
})
