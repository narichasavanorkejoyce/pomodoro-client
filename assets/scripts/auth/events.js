'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const uxLogic = require('../uxLogic.js')

// RENDERING MAIN VIEWS
const onShowLandingPage = function () {
  uxLogic.showLandingPage()
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
}

const onShowHomePage = function () {
  uxLogic.showHomePage()
  $('#sign-out-option').on('click', onShowSignOut)
  $('#change-pwd-option').on('click', onShowChangePassword)
}

// RENDERING SMALLER VIEWS
const onShowSignOut = function () {
  uxLogic.showSignOut()
  $('#sign-out').on('submit', onSignOut)
}

const onShowChangePassword = function () {
  $('#password-modal').modal({ show: true })
  $('.pass-success-message').hide()
  $('.old-password-mismatch-message').hide()
  $('#change-password').on('submit', onChangePassword)
}

// API CALLS - USER AUTHENTICATION
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
  .then(ui.successSignUp)
  .catch(ui.failureSignUp)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
  .then(ui.signInSuccess)
  // .then(onShowHomePage)
  .then(onGetSessions)
  .catch(ui.signInFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
  .then(ui.signOutSuccess)
  .then(onShowLandingPage)
  .catch(ui.signOutFail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFail)
}

// API CALLS - POMODORO TIMER
const onGetSessions = function (event) {
  console.log('onGetSessions ran')
  // event.preventDefault()
  api.getSessions()
    .then(data => {
      onShowHomePage(data)
    })
    .catch(ui.getSessionsFail)
}

const addNewSession = function (event) {
  console.log('addNewSession ran')
}

module.exports = {
  onShowLandingPage
}
