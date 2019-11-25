class ClientContact {
  save(clientsId, req) {
    let query = `
    INSERT INTO clients_emails (
      clients_id, 
      email) 
    values (
      ${clientsId}, 
      '${req.email}'
    )`
    return query
  }

  update(clientsId, req) {
    let query = `
    UPDATE clients_emails SET 
      email = '${req.email}', 
      st_registry_active = '${req.st_registry_active}', 
      modified = NOW() 
    WHERE id = ${req.id}
      AND clients_id = ${clientsId}`

    return query
  }

  static getEmailsFromClientsId(clientsId) {
    let query = `
      SELECT 
        ce.id, 
        ce.email, 
        ce.st_registry_active
      FROM clients_emails ce
        WHERE clients_id = ${clientsId} 
      AND st_active = 1
    `
    return query
  }
}

module.exports = ClientContact
