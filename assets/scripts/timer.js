let timer = null
let duration = 1500
// let duration = 10
let minutes

function tick () {
  // console.log('tick ran')
  // Decrease duration by increment of 1
  --duration
  // Format duration into minutes and seconds
  minutes = parseInt(duration / 60, 10)
  let seconds = parseInt(duration % 60, 10)
  seconds = seconds < 10 ? '0' + seconds : seconds
  document.getElementById('input').innerHTML = (minutes + ':' + seconds)
  if (duration <= 0) {
    document.getElementById('input').innerHTML = "Time's Up!"
    const audio = $('#alert-audio')
    audio[0].play()
  }
}

function start () {
  timer = setInterval(tick, 1000)
}

function stop () {
  clearInterval(timer)
}

function reset () {
  document.getElementById('input').innerHTML = '25:00'
  clearInterval(timer)
  duration = 1500
  // duration = 10
  timer = null
}

const startHandlers = function () {
  $('#start-timer').on('click', function () {
    start()
    $('#start-timer').hide()

    $('#stop-timer').show()

    $('#reset-timer').show()
  })
}

const stopHandlers = function () {
  $('#stop-timer').on('click', function () {
    stop()
    $('#stop-timer').hide()

    $('#start-timer').show()

    $('#reset-timer').show()
  })
}

const resetHandlers = function () {
  $('#reset-timer').on('click', function () {
    reset()
    $('#reset-timer').hide()

    $('#start-timer').show()

    $('#stop-timer').hide()
  })
}

module.exports = {
  startHandlers,
  stopHandlers,
  resetHandlers,
  reset
}
