const uxLogicHandlers = () => {
  // LAUNCH PAGE
  $('#home-page').hide()

  // HOME PAGE

  // Default hidden elements
  // $('#sign-out-jumbotron').hide()

  // Change Password
  $('#change-pwd-option').on('click', function () {
    $('#password-modal').modal({ show: true })
    $('.pass-success-message').hide()
    $('.old-password-mismatch-message').hide()
  })

  // Sign Out
  $('#sign-out-option').on('click', function () {
    $('#sign-out-modal').modal({ show: true })
  })
}

module.exports = {
  uxLogicHandlers
}
