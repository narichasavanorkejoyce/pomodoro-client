'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const uxLogic = require('../uxLogic.js')
const timer = require('../timer.js')

// RENDER MAIN VIEWS
const onShowLandingPage = function () {
  uxLogic.showLandingPage()
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
}

const onShowHomePage = function (data) {
  console.log('onShowHomePage ran')
  uxLogic.showHomePage(data)
  // Navigation Bar
  $('#add-session-option').on('click', onShowAddSession)
  $('#start-timer-option').on('click', onShowTimer)
  $('#sign-out-option').on('click', onShowSignOut)
  $('#change-pwd-option').on('click', onShowChangePassword)
  // Session Table
  $('.remove-session').on('click', deleteSession)
  $('.add-poms').on('click', updateSession)
}

// RENDER SMALLER VIEWS
const onShowAddSession = function () {
  $('#add-session-modal').modal({ show: true })
  $('#add-session').on('submit', addNewSession)
  $('.cancel-add-session').on('click', cancelNewSession)
}

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

const onShowTimer = function () {
  $('#timer-modal').modal({ show: true })
  timer.timerHandlers()
}

// ACTIONS - USER AUTHENTICATION
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

// ACTIONS - POMODORO TIMER
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
  event.preventDefault()
  console.log('addNewSession ran')
  const data = getFormFields(event.target)
  console.log('addNewSession data is ', data)
  api.addSession(data)
    .then(onGetSessions)
    .then(() => {
      $('body').removeClass('modal-open')
    })
    .catch(ui.addNewSessionFail)
}

const cancelNewSession = function () {
  console.log('cancelNewSession ran')
  $('#add-session')[0].reset()
  $('body').removeClass('modal-open')
  onGetSessions()
}

const deleteSession = function () {
  console.log('deleteSession ran')
  const id = $(this).attr('data-id')
  console.log('session id is', id)
  api.deleteSesh(id)
    .then(onGetSessions)
    .catch(ui.deleteSessionFail)
}

const updateSession = function () {
  console.log('updateSession ran')
  const id = $(this).attr('data-id')
  // Need to transform string into integer
  const nPomodoro = +$(this).attr('value')
  const pomodoroPlusOne = nPomodoro + 1
  console.log('update session id is', id)
  console.log('update session data is', nPomodoro)
  console.log('pomodoro plus one is', pomodoroPlusOne)
  api.updateSesh(id, pomodoroPlusOne)
    .then(onGetSessions)
    .catch(ui.updateSessionFail)
}

module.exports = {
  onShowLandingPage
}
