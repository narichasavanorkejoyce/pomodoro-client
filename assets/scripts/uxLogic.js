const LandingPageHB = require('./templates/landing-page.handlebars')
const HomePageHB = require('./templates/home-page.handlebars')

const showLandingPage = function () {
  $('.body-content').empty()
  $('.body-content').append(LandingPageHB())
}

const showHomePage = function () {
  $('.body-content').empty()
  $('.body-content').append(HomePageHB())
}

  // Sign Out
  $('#sign-out-option').on('click', function () {
    $('#sign-out-modal').modal({ show: true })
  })
}

module.exports = {
  showLandingPage,
  showHomePage,
}
