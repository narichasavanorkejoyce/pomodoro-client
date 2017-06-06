let timer = null
let duration = 1500

function tick () {
  // Decrease duration by increment of 1
  const time = --duration
  // Format time into minutes and seconds
  const minutes = parseInt(time / 60, 10)
  let seconds = parseInt(time % 60, 10)
  seconds = seconds < 10 ? '0' + seconds : seconds
  document.getElementById('input').innerHTML = (minutes + ':' + seconds)
  if (duration <= 0) {
    document.getElementById('input').innerHTML = "Time's Up!"
  }
}

function start () {
  tick()
  timer = setTimeout(start, 1000)
}

function stop () {
  clearTimeout(timer)
}

const timerHandlers = function () {
  $('#start').click(start)
  $('#stop').click(stop)
}

module.exports = {
  timerHandlers
}
