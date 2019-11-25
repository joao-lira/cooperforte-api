const express = require('express')
const pool = require('../config/database')
const Client = require('../model/ClientModel')
const ClientContact = require('../model/ClientContactModel')
const ClientEmail = require('../model/ClientEmailModel')
const Util = require('../controller/components/Util')

const router = express.Router()

/**
 * GET
 */
router.get('/', async (req, res, next) => {
  try {
    const responseClients = await pool.query(
      Client.getClientsActivesInactives()
    )
    let response = []
    let responseItem = []
    for (let index = 0; index < responseClients.length; index++) {
      const client = responseClients[index]
      const responseContacts = await pool.query(
        ClientContact.getContactsFromClientsId(client.id)
      )
      const responseEmails = await pool.query(
        ClientEmail.getEmailsFromClientsId(client.id)
      )
      responseItem = {
        id: client.id,
        client_name: client.client_name,
        client_cpf: client.client_cpf,
        client_cpf_formatted: client.client_cpf_formatted,
        client_cep: client.client_cep,
        client_cep_formatted: client.client_cep_formatted,
        client_logradouro: client.client_logradouro,
        client_bairro: client.client_bairro,
        client_cidade: client.client_cidade,
        client_uf: client.client_uf,
        client_complemento: client.client_complemento,
        st_registry_active: client.st_registry_active,
        created: client.created,
        created_formatted: client.created_formatted,
        modified: client.modified,
        modified_formatted: client.modified_formatted,
        contacts: responseContacts,
        emails: responseEmails
      }
      response = response.concat(responseItem)
    }

    // response
    res
      .status(200)
      .json(
        Util.jaySon(
          true,
          'Sucesso!',
          'Clientes listados com sucesso',
          null,
          null,
          'clients',
          response
        )
      )
  } catch (error) {
    Util.defaultResponse(res, error, 'clients')
  }
})

/**
 * POST
 */
router.post('/', async (req, res, next) => {
  try {
    const client = new Client()
    const clientContact = new ClientContact()
    const clientEmail = new ClientEmail()

    req.body.client_name = Util.params(req.body.client_name)
    req.body.client_cpf = Util.params(
      Util.removePontuations(req.body.client_cpf)
    )
    req.body.client_cep = Util.params(
      Util.removePontuations(req.body.client_cep)
    )
    req.body.client_logradouro = Util.params(req.body.client_logradouro)
    req.body.client_bairro = Util.params(req.body.client_bairro)
    req.body.client_cidade = Util.params(req.body.client_cidade)
    req.body.client_uf = Util.params(req.body.client_uf)
    req.body.client_complemento = Util.params(req.body.client_complemento)
    req.body.st_registry_active = Util.params(req.body.st_registry_active)
    req.body.contacts = req.body.contacts
    req.body.emails = req.body.emails

    // insert client
    const response = await pool.query(client.save(req.body))
    const clientsId = response.insertId

    // insert contacts
    req.body.contacts.map(async contact => {
      await pool.query(clientContact.save(clientsId, contact))
    })

    // insert emails
    req.body.emails.map(async email => {
      await pool.query(clientEmail.save(clientsId, email))
    })

    // response
    res
      .status(200)
      .json(
        Util.jaySon(
          true,
          'Sucesso!',
          'Cliente cadastrado com sucesso.',
          null,
          null,
          'clients',
          response
        )
      )
  } catch (error) {
    Util.defaultResponse(res, error, 'clients')
  } finally {
    // revert inserts
  }
})

/**
 * PUT
 */
router.put('/', async (req, res, next) => {
  try {
    const client = new Client()
    const clientContact = new ClientContact()
    const clientEmail = new ClientEmail()

    req.body.id = Util.params(req.body.id)
    req.body.client_name = Util.params(req.body.client_name)
    req.body.client_cpf = Util.params(
      Util.removePontuations(req.body.client_cpf)
    )
    req.body.client_cep = Util.params(
      Util.removePontuations(req.body.client_cep)
    )
    req.body.client_logradouro = Util.params(req.body.client_logradouro)
    req.body.client_bairro = Util.params(req.body.client_bairro)
    req.body.client_cidade = Util.params(req.body.client_cidade)
    req.body.client_uf = Util.params(req.body.client_uf)
    req.body.client_complemento = Util.params(req.body.client_complemento)
    req.body.st_registry_active = Util.params(req.body.st_registry_active)
    req.body.contacts = req.body.contacts
    req.body.emails = req.body.emails

    // insert client
    const response = await pool.query(client.update(req.body))

    // insert contacts
    req.body.contacts.map(async contact => {
      if (contact.id === '') {
        await pool.query(clientContact.save(req.body.id, contact))
      } else {
        await pool.query(clientContact.update(req.body.id, contact))
      }
    })

    // insert emails
    req.body.emails.map(async email => {
      if (email.id === '') {
        await pool.query(clientEmail.save(req.body.id, email))
      } else {
        await pool.query(clientEmail.update(req.body.id, email))
      }
    })

    // response
    res
      .status(200)
      .json(
        Util.jaySon(
          true,
          'Sucesso!',
          'Cliente atualizado com sucesso.',
          null,
          null,
          'clients',
          response
        )
      )
  } catch (error) {
    Util.defaultResponse(res, error, 'clients')
  } finally {
    // revert inserts
  }
})

/**
 * DELETE
 */
router.delete('/:id', async (req, res, next) => {
  try {
    var id = req.params.id
    const response = await pool.query(Client.delete(id))

    // response
    res
      .status(200)
      .json(
        Util.jaySon(
          true,
          'Sucesso!',
          'Cliente excluído com sucesso.',
          null,
          null,
          'clients',
          response
        )
      )
  } catch (error) {
    Util.defaultResponse(res, error, 'clients')
  } finally {
    // revert inserts
  }
})

module.exports = router
