'use strict'
const store = require('../store.js')

// USER AUTHENTICATION
const successSignUp = (data) => {
  // // console.log(data)
  $('#sign-up-response').text('Awesome! Now, please sign in.')
  $('#sign-up')[0].reset()
}

const failureSignUp = () => {
  // // console.error(error)
  $('#sign-up-response').text('Sorry, user already exists.')
}

const signInSuccess = (data) => {
  store.user = data.user
  // // console.log(store)
  // $('#sign-in-response').text('Success! User has signed in.')
  $('#sign-in')[0].reset()
  return
}

const signInFail = () => {
  // // console.error(error)
  $('#sign-in-response').text('Wrong password. Please try again.')
}

const changePasswordSuccess = () => {
  // // console.log('Password Successfully Changed.')
  $('.old-password-mismatch-message').hide()
  $('.pass-success-message').show()
  $('#change-password')[0].reset()
}

const changePasswordFail = () => {
  // // console.error(error)
  $('#change-password')[0].reset()
  $('.old-password-mismatch-message').show()
  $('.pass-success-message').hide()
}

const signOutSuccess = () => {
  store.user = null
  // // console.log(store)
}

const signOutFail = () => {
  // console.error(error)
}

// POMODORO TIMER

const getSessionsSuccess = (data) => {
  // console.log('getSessionsSuccess ran')
  // console.log('getSessionsSuccess data is', data)
}

const getSessionsFail = (error) => {
  // console.error(error)
}

const deleteSessionSuccess = (data) => {
  // console.log('deleteSession ran')
}

const deleteSessionFail = (error) => {
  // console.error(error)
}

const updateSessionSuccess = (data) => {
  // console.log('updateSessionSuccess ran')
  // console.log('data is', data)
}

const updateSessionFail = (error) => {
  // console.error(error)
}

module.exports = {
  signOutFail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFail,
  failureSignUp,
  successSignUp,
  getSessionsSuccess,
  getSessionsFail,
  deleteSessionSuccess,
  deleteSessionFail,
  updateSessionSuccess,
  updateSessionFail
}
