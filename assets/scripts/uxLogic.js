const LandingPageHB = require('./templates/landing-page.handlebars')
const HomePageHB = require('./templates/home-page.handlebars')
const SignOutHB = require('./templates/sign-out-view.handlebars')

const showLandingPage = function () {
  $('.body-content').empty()
  $('.body-content').append(LandingPageHB())
}

const showHomePage = function (data) {
  console.log('showHomePage ran')
  $('.body-content').empty()
  $('.body-content').append(HomePageHB(
    {
      sessions: data.sessions
    }
  ))
}

const showSignOut = function () {
  $('.body-content').empty()
  $('.body-content').append(SignOutHB)
}

module.exports = {
  showLandingPage,
  showHomePage,
  showSignOut
}
