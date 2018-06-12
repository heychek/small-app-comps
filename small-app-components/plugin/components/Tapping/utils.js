const RecordStatus = {
  ON_START: 'ON_START',
  ON_PAUSE: 'ON_PAUSE',
  ON_STOP: 'ON_STOP'
}

const recordOptions = {
  duration: 120000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'mp3'
}

const imgs = {
  issue_record_icon_n: 'http://p92sv5qma.bkt.clouddn.com/assets/record/issue_record_icon_n.svg',
  issue_record_pause_icon_n: 'http://p92sv5qma.bkt.clouddn.com/assets/record/issue_record_pause_icon_n.svg'
}

const recordHandler = {}
recordHandler[RecordStatus.ON_STOP] = (that) => {
  that.startRecord()
}
recordHandler[RecordStatus.ON_START] = (that) => {
  that.endRecord()
}

export {
  RecordStatus,
  recordOptions,
  imgs,
  recordHandler
}
