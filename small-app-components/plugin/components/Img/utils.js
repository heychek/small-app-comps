const img404 =
  'https://raw.githubusercontent.com/hckisagoodboy/imgs/master/image_not_found.png'

const types = {
  'NOMAL': 'nomal',
  'UNDEFINED': 'undefined',
  'NULL': 'null',
  'EMPTY': '',
  'ERROR': 'error'
}

const getType = (src) => {
  if (typeof (src) === 'undefined') {
    return types.UNDEFINED
  }
  if (src === null) {
    return types.NULL
  }
  if (src === '') {
    return types.EMPTY
  }
  if (src === 'error') {
    return types.ERROR
  }
  return types.NOMAL
}

const log = str => {
  console.log(`===src in Img comp now is ${str}===`)
}

module.exports = {
  img404, types, getType, log
}