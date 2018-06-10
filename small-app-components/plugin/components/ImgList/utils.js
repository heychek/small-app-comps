
import { isStrNull } from '../utils.js'

const rootHeightType = {
  HIGH: 442,
  LOW: 213,
  NONE: 0
}

const ROOT_LOW_TYPE_LENGTHS = [2, 3];

const getValidUrls = urls => {
  let res = []

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i]
    if (!isStrNull(url)) {
      res.push(url)
    }
  }
  return res
}

const dealInValidLen = urls => {
  let res = 0

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i]
    if (!isStrNull(url)) {
      res++
    } else {
      urls.splice(i, 1)
      i--
    }
  }
  return res
}

const rootSizeInitor = {}
rootSizeInitor['len0'] = (that) => {
  that.setData({
    rootHeight: 0,
    rootWidth: 0
  })
}
rootSizeInitor['len1'] = (that) => {
  that.setData({
    rootHeight: that.data.boxSize * 2 + that.data.boxSpace,
    rootWidth: that.data.boxSize * 3 + that.data.boxSpace * 2
  })
}
rootSizeInitor['len2'] = (that) => {
  that.setData({
    rootHeight: that.data.boxSize,
    rootWidth: that.data.boxSize * 2 + that.data.boxSpace
  })
}
rootSizeInitor['len3'] = (that) => {
  that.setData({
    rootHeight: that.data.boxSize,
    rootWidth: that.data.boxSize * 3 + that.data.boxSpace * 2
  })
}
rootSizeInitor['len4'] = (that) => {
  that.setData({
    rootHeight: that.data.boxSize * 2 + that.data.boxSpace,
    rootWidth: that.data.boxSize * 2 + that.data.boxSpace
  })
}
rootSizeInitor['len5'] = (that) => {
  that.data.urls.push('')
  that.setData({
    rootHeight: that.data.boxSize * 2 + that.data.boxSpace,
    rootWidth: that.data.boxSize * 3 + that.data.boxSpace * 2,
    urls: that.data.urls
  })
}
rootSizeInitor['len6'] = (that) => {
  that.setData({
    rootHeight: that.data.boxSize * 2 + that.data.boxSpace,
    rootWidth: that.data.boxSize * 3 + that.data.boxSpace * 2
  })
}

export {
  rootHeightType,
  ROOT_LOW_TYPE_LENGTHS,
  getValidUrls,
  dealInValidLen,
  rootSizeInitor
}