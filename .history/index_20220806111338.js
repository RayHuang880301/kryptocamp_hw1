const clearInput = () => {
  $('#todo').val('')
}

const appendItem = () => {
  const value = $('#todo').val()
  $('.todolist__item').append(`<li class="no-completed">
    <input class="todolist__input" type="checkbox" />
    <span>${value}</span>
    <a class="delete" href="#">
      <i class="fa fa-x"></i>
    </a>
  </li>`)
}

// TODO: 使用者可以新增待辦事項
const addNewTodo = () => {
  // if (!checkForm()) return

  appendItem()
  clearInput()
}

// 更新已完成項目
const updateCompletedCount = () => {
  const count = $('.todolist__item').find('.completed').length

  $('.todolist__info').find('a').text(count)
}

// TODO: 使用者可以刪除待辦事項
const deleteTodo = (e) => {
  $(e.target).parent().closest('li').remove()
}

// TODO: 清除已完成項目
const clearCompletedTodo = () => {
  $('.todolist__item').find('.completed').fadeOut(500, () => {
    $('.todolist__item').find('.completed').remove()
    updateCompletedCount()
  })
}


// 監聽
$(() => {
  // TODO: 每一條代辦事項 delete 監聽 click 事件
  $('.todolist__item').on('click', '.delete', (e) => deleteTodo(e))

  // 狀態：全部、待完成、已完成
  $('.todolist__tabs li').each(function () {
    $(this).click(function () {
      $(this).siblings().find('a').removeClass('active')
      $(this).find('a').addClass('active')
    })
  })

  // TODO: 使用者可以將待辦事項設定成已完成
  // 步驟一：監聽每一個 todo list，前面 checkbox 有被點擊時執行 Function
  $('.todolist__item li').on('click', 'input', (e) => {
    // 步驟二：每條待辦事項根據條件，加上不同的 class：completed, no-complete

    if (li.hasClass('completed')) {
      li.removeClass('completed')
      li.addClass('no-completed')
    } else {
      li.removeClass('no-completed')
      li.addClass('completed')
    }
    // 步驟三：更新已完成項目的數字
    updateCompletedCount()
  })

  // 篩選全部
  $('.todolist__tabs').on('click', '.all', () => {
    $('.todolist__item').children().show()
  })

  // TODO: 篩選待完成
  $('.todolist__tabs').on('click', '.no-completed', () => {
    $('.todolist__item').find('.completed').hide()
    $('.todolist__item').find('.no-completed').show()
  })

  // TODO: 篩選已完成
  $('.todolist__tabs').on('click', '.completed', () => {
    $('.todolist__item').find('.completed').show()
    $('.todolist__item').find('.no-completed').hide()
  })
})