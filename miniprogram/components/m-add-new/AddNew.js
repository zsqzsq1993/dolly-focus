// components/m-add-new/AddNew.js
const THEME_COLOR = '#ffcd32'
const DISABLED_COLOR = 'silver'

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    hiddenFlag: false,

    modeIndex: 0,

    slider: {
      disabled: false,
      color: THEME_COLOR
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      this.setData({
        'hiddenFlag': false
      })
    },

    hide() {
      this.setData({
        'hiddenFlag': true
      })
    },

    confirm() {
      this.hide()
    },

    handleCounterChange(event) {
      const index = event.target.dataset.index

      this.setData({
        'modeIndex': index,
        'slider.disabled' : index == 1,
        'slider.color': index == 1 ? DISABLED_COLOR : THEME_COLOR
      })
    }
  }
})
