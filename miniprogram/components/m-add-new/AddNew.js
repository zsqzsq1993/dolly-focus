// components/m-add-new/AddNew.js
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
    hiddenFlag: false
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
    }
  }
})
