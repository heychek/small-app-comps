import { isObjNull, noIconTost } from '../../components/utils.js'
import {
  RecordStatus,
  recordOptions,
  imgs,
  recordHandler
} from './utils.js'

const recorderManager = wx.getRecorderManager();

Component({
  properties: {
    isStart: {
      type: Boolean,
      value: false,
      observer: 'handleRecord'
    }
  },

  data: {
    currRecordStatus: RecordStatus.ON_STOP,
    imgs
  },

  attached() {
    recorderManager.onStart(() => {
      this.data.startTime = new Date().getTime()
    })
    recorderManager.onStop((res) => {
      const end = new Date().getTime()
      const totalSecond = (end - this.data.startTime) / 1000
      this.data.startTime = 0
      this.triggerEvent('getRecordTempFile', { 
        tempFilePath: res.tempFilePath, 
        totalSecond: Math.round(totalSecond) 
      })
    })
    recorderManager.onError(err => {
      noIconTost('录音发生错误，请退出重试')
      console.log('录音发生错误，请退出重试', err)
    })
  },

  methods: {
    handleRecord() {
      recordHandler[this.data.currRecordStatus](this)
    },

    startRecord() {
      // TODO: 播放开始录音滴的声音
      recorderManager.start(recordOptions)
      this.setData({
        currRecordStatus: RecordStatus.ON_START
      })
    },

    endRecord() {
      // TODO: 播放结束开始录音滴的声音
      recorderManager.stop(recordOptions)
      this.setData({
        currRecordStatus: RecordStatus.ON_STOP
      })
    }
  }
})
