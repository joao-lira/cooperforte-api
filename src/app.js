require('dotenv').config({
  path: process.env.NODE_ENV === 'teste' ? '.env.test' : '.env'
})

const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

/**
 * Controllers
 */
const UsersController = require('./controller/UsersController')
const ClientsController = require('./controller/ClientsController')

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.use('/users', UsersController)
app.use('/clients', ClientsController)

// if we are here then the specified request is not found
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// all other requests are not implemented.
app.use((err, req, res, next) => {
  res.status(err.status || 501)
  res.json({
    error: {
      code: err.status || 501,
      message: err.message
    }
  })
})

module.exports = app
