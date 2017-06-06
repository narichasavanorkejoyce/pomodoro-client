let timer = null
let duration = 1500
let minutes

function tick () {
  console.log('tick ran')
  // Decrease duration by increment of 1
  --duration
  // Format duration into minutes and seconds
  minutes = parseInt(duration / 60, 10)
  let seconds = parseInt(duration % 60, 10)
  seconds = seconds < 10 ? '0' + seconds : seconds
  document.getElementById('input').innerHTML = (minutes + ':' + seconds)
  if (duration <= 0) {
    document.getElementById('input').innerHTML = "Time's Up!"
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
  timer = null
}

const startHandlers = function () {
  $('#start-timer').on('click', function () {
    start()
    $('#start-timer').off()

    $('#stop-timer').on('click', function () {
      stop()
      $('#stop-timer').off()
    })

    $('#reset-timer').on('click', function () {
      reset()
      $('#reset-timer').off()
    })
  })
}

const stopHandlers = function () {
  $('#stop-timer').on('click', function () {
    stop()
    $('#stop-timer').off()

    $('#start-timer').on('click', function () {
      start()
      $('#start-timer').off()
    })

    $('#reset-timer').on('click', function () {
      reset()
      $('#reset-timer').off()
    })
  })
}

const resetHandlers = function () {
  $('#reset-timer').on('click', function () {
    reset()
    $('#reset-timer').off()

    $('#start-timer').on('click', function () {
      start()
      $('#start-timer').off()
    })

    $('#stop-timer').on('click', function () {
      stop()
      $('#stop-timer').off()
    })
  })
}

module.exports = {
  startHandlers,
  stopHandlers,
  resetHandlers,
  reset
}
