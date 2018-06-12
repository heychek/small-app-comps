import { modal, isStrNull } from '../../components/utils.js'
const baseUrl = 'http://p92sv5qma.bkt.clouddn.com/assets/'
const imgs = {
  play: `${baseUrl}issue_play_icon.svg`,
  pause: `${baseUrl}issue_pause_icon copy.svg`
}

const innerAudioContext = wx.createInnerAudioContext()

Component({
  properties: {
    recordPath: {
      type: String,
      value: ''
    },
    recordTime: {
      type: Number,
      value: 0,
      observer: 'recordTime'
    },
    isDelShow: {
      type: Boolean,
      value: false
    }
  },

  data: {
    isOnPlay: false,
    isOnTouch: false,
    localRecordTime: 0,
    imgs
  },

  attached() {
    this.initAudio()
  },

  methods: {
    recordTime(recordTime) {
      this.setData({
        localRecordTime: recordTime
      })
    },

    initAudio() {
      const that = this
      innerAudioContext.autoplay = false
      innerAudioContext.onEnded(() => {
        that.playEnd()
      })
      innerAudioContext.onPlay(() => {
        const that = this
        this.setData({
          isOnPlay: true
        })
        that.inteval = setInterval(() => {
          if (--that.data.localRecordTime >= 0) {
            that.setData({
              localRecordTime: that.data.localRecordTime
            })
          } else {
            clearInterval(that.inteval)
          }
        }, 1000)
      })
      innerAudioContext.onStop(() => {
        that.playEnd()
      })
      innerAudioContext.onError(err => {
        that.playEnd()
        modal('播放错误，请检查音频格式！', false)
      })
    },

    playEnd(newValue) {
      clearInterval(this.inteval)
      this.setData({
        isOnPlay: false,
        localRecordTime: this.data.recordTime
      })
    },

    playerHandle() {
      if (isStrNull(this.data.recordPath)) {
        modal('音源为空，请确认音源信息！', false)
        return
      }
      this.data.isOnPlay ? this.stop() : this.play()
    },

    play() {
      innerAudioContext.src = this.data.recordPath
      innerAudioContext.play()
    },

    stop() {
      innerAudioContext.stop()
    },

    del() {
      if (isStrNull(this.recordPath)) {
        modal('音源为空，请确认音源信息！', false)
        return
      }
      modal('是否确认删除该条录音？')
        .then(() => this.triggerEvent('delteRecord', { recordPath: this.data.recordPath }))
        .catch(() => console.log('cancle'))
    },

    startTouch() {
      this.setData({
        isOnTouch: true
      })
    },

    endTouch() {
      this.setData({
        isOnTouch: false
      })
    }
  }
})
