Component({
  options: {
    multipleSlots: true
  },

  properties: {
    options: {
      type: Array,
      value: [
        {
          position: 'top',
          size: 0
        },
        {
          position: 'bottom',
          size: 0
        },
        {
          position: 'left',
          size: 40
        },
        {
          position: 'right',
          size: 40
        }
      ]
    }
  },

  data: {

  },

  attached() {

  },

  methods: {

  }
})
