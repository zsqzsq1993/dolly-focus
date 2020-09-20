// components/m-todo-box/TodoBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    todo: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    countMode () {
      const {mode, time} = this.properties.todo
      return mode === 'COUNT_DOWN'
        ? time
        : '正计时'
    }
  }
})
