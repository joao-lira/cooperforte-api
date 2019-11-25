const Util = require('../controller/components/Util')

class ClientContact {
  save(clientsId, req) {
    let query = `
    INSERT INTO clients_contacts (
      clients_id, 
      phone_number, 
      contact_type)
    values (
      ${clientsId}, 
      '${Util.removePontuations(req.phone_number_formatted)}', 
      '${req.contact_type}'
    )`
    return query
  }

  update(clientsId, req) {
    let query = `
    UPDATE clients_contacts SET 
      phone_number = '${Util.removePontuations(req.phone_number_formatted)}', 
      contact_type = '${req.contact_type}', 
      st_registry_active = '${req.st_registry_active}', 
      modified = NOW() 
    WHERE id = ${req.id}
      AND clients_id = ${clientsId}`

    return query
  }

  static getContactsFromClientsId(clientsId) {
    let query = `
      SELECT 
        cc.id,
        cc.phone_number,
        CASE 
          WHEN cc.contact_type = 'CE' THEN MASK(cc.phone_number, "(##)#####-####")
        ELSE MASK(cc.phone_number, "(##)####-####") 
        END AS phone_number_formatted,
        cc.contact_type,
        cc.st_registry_active
      FROM clients_contacts cc
        WHERE clients_id = ${clientsId} 
      AND st_active = 1
    `
    return query
  }
}

module.exports = ClientContact
