const loadTypes = {
  fanner1: 'fanner1',
  fanner2: 'fanner2',
  fanner3: 'fanner3',
  fanner4: 'fanner4',
  threeBalls: 'threeBalls',
}
Component({
  properties: {
    size: {
      type: Number,
      value: 50,
      observer: 'sizeChange'
    },
    type: {
      type: String,
      value: loadTypes.threeBalls
    },
    threeBallsColor: {
      type: String,
      value: '#D8D8D8'
    }
  },

  data: {
    padding: 2,
    padding4: 1,
    size_: 50
  },

  methods: {
    sizeChange(newVal) {
      if (newVal < 50 && this.data.type.indexOf('fanner') != -1) {
        this.setData({
          size_: 50
        })
        return
      }
      this.setData({
        size_: newVal,
        padding: Math.round(8 * newVal / 150),
        padding4: Math.round(8 * newVal / 300)
      })
    }
  }
})
