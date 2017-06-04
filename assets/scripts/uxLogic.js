const LandingPageHB = require('./templates/landing-page.handlebars')

const showLandingPage = function () {
  $('.body-content').empty()
  $('.body-content').append(LandingPageHB())
}

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
  showLandingPage,
}
