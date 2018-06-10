const img404 =
  'https://raw.githubusercontent.com/hckisagoodboy/imgs/master/image_not_found.png'


const isStrNull = str => {
  return typeof (str) === 'undefined' || str === null || str === ''
}

const isObjNull = obj => {
  return (typeof (obj) === 'undefined' || obj === null || JSON.stringify(obj) === '{}')
}

const modal = (tip, showCancel) => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '提示',
      content: tip || '',
      showCancel: typeof (showCancel) === 'undefined' ? true : showCancel,
      success: function (res) {
        if (res.confirm) {
          resolve('confirm')
        } else if (res.cancel) {
          reject('cancle')
        }
      }
    })
  })
}

const noIconTost = (tip, time) => {
  wx.showToast({
    title: tip || '成功',
    icon: 'none',
    mask: true,
    duration: time || 1500
  })
}

module.exports = {
  img404,
  isStrNull,
  isObjNull,
  modal,
  noIconTost
}