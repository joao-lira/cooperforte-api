const express = require('express')
const pool = require('../config/database')
const User = require('../model/UserModel')
const jwt = require('jsonwebtoken')
const Util = require('../controller/components/Util')

const router = express.Router()

/**
 * POST
 */
router.post('/login', async (req, res, next) => {

  req.body.username = Util.params(req.body.username)
  req.body.password = Util.params(req.body.password)
  
  let response = await pool.query(User.getUserLogin(req.body.username, req.body.password))

  if (response.length !== 0) {
    response = response[0]
    let token = jwt.sign({ response }, process.env.SECRET, { expiresIn: 90000 })

    // response
    res.status(200).json(
      Util.jaySon(true, 'Sucesso!', 'Login realizado com sucesso.', null, null, 'token', token)
    )
  } else {
    // response
    res.status(200).json(
      Util.jaySon(false, 'Ooops!', 'Usuário ou senha incorretos', null, null, 'token', null)
    )
  }
  
})

module.exports = router
