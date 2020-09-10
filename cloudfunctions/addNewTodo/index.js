// 云函数入口文件
const cloud = require('wx-server-sdk')
const count_down = 'COUNT_DOWN'
const count_up = 'COUNT_UP'

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const {newTodo} = event

  const openId = wxContext.OPENID

  if (!checkNewTodoFormat(newTodo)) {
    return {
      code: '-1',
      message: 'mismatching of newTodo format.'
    }
  }

  const {name, mode, time} = newTodo

  const db = cloud.database().collection('todos')

  return new Promise(resolve => {
    // 这里未做同名检查，检查在前端完成
    db.add({
      data: {
        openId,
        name,
        mode,
        time
      }
    }).then(response => {
      resolve({
        code: 0,
        response
      }) 
    }).catch(error => {
      resolve({
        code: -1,
        message: error
      })
    })
  })
}

function checkNewTodoFormat(newTodo) {
  const {name, mode, time} = newTodo

  if (!name) {
    return false
  }

  if (
    mode !== count_down &&
    mode !== count_up) {
      return false
  }

  if (
    typeof time === 'number' &&
    (time < 5 || time > 180)
  ) {
    return false
  }

  if (
    typeof time !== 'number' &&
    time !== null
  ) {
    return false
  }

  return true
}