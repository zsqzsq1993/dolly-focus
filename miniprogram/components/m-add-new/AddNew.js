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
    todoName: '',

    hiddenFlag: false,

    modeIndex: 'COUNT_DOWN',

    inputWarnFlag: false,

    slider: {
      disabled: false,
      color: THEME_COLOR,
      min: 5,
      max: 180,
      value: 25
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
        'hiddenFlag': true,
        todoName: '',
        modeIndex: 'COUNT_DOWN',
        inputWarnFlag: false,
        'slider.disabled': false,
        'slider.value': 25
      })
    },

    confirm() {
      if (!this.data.todoName) {
        this.setData({
          'inputWarnFlag': true
        })

        return
      }

      const newTodo = {
        mode: this.data.modeIndex,

        name: this.data.todoName,

        time: this.data.modeIndex === 'COUNT_DOWN'
        ? this.data.slider.value
        : null
      }

      wx.cloud.callFunction({
        name: 'addNewTodo',
        data: {
          newTodo
        },
        complete(response) {
          console.log(response)
        }
      })

      this.hide()
    },

    handleCounterChange(event) {
      const index = event.target.dataset.index
      
      this.setData({
        'modeIndex': index,
        'slider.disabled' : index === 'COUNT_UP',
        'slider.color': index === 'COUNT_UP' 
        ? DISABLED_COLOR
        : THEME_COLOR
      })
    },

    handleSliderChange(event) {
      this.setData({
        'slider.value': event.detail.value
      })
    },

    focusInput() {
      this.setData({
        'inputWarnFlag': false
      })
    },

    whenInputChange(event) {
      this.setData({
        'todoName': event.detail.value
      })
    }
  }
})
