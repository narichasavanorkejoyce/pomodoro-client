'use strict'

const config = require('../config')
const store = require('../store')

// USER AUTHENTICATION CALLS
const signUp = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  // console.log(store.user.id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/change-password/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// POMODORO TIMER CALLS

const getSessions = function () {
  console.log('user is', store.user)
  return $.ajax({
    url: config.apiOrigin + '/sessions',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addSession = function (data) {
  console.log('addSession ran')
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sessions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteSesh = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/sessions/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getSessions,
  addSession,
  deleteSesh
}
