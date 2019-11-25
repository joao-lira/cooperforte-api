class Client {
  static getClientsActivesInactives() {
    let query = `
      SELECT
          c.id,
          c.client_name,
          client_cpf,
          MASK(c.client_cpf, "###.###.###-##") AS client_cpf_formatted,
          client_cep,
          MASK(c.client_cep, "#####-###") AS client_cep_formatted,
          client_logradouro,
          client_bairro,
          client_cidade,
          client_uf,
          client_complemento,
          c.st_active,
          c.st_registry_active,
          created,
          modified,
          DATE_FORMAT(c.created, '%d/%m/%Y %H:%i') AS created_formatted,
          DATE_FORMAT(c.modified, '%d/%m/%Y %H:%i') AS modified_formatted
      FROM
        clients c
      WHERE c.st_active = 1
        ORDER BY c.client_name ASC`
    return query
  }

  save(req) {
    let query = `
      INSERT INTO clients (
        client_name, 
        client_cpf, 
        client_cep, 
        client_logradouro, 
        client_bairro, 
        client_cidade, 
        client_uf, 
        client_complemento, 
        created, 
        modified)
      VALUES (
        '${req.client_name}', 
        '${req.client_cpf}', 
        '${req.client_cep}', 
        '${req.client_logradouro}', 
        '${req.client_bairro}', 
        '${req.client_cidade}', 
        '${req.client_uf}', 
        '${req.client_complemento}', 
        NOW(), 
        NOW())`

    return query
  }

  update(req) {
    let query = `
      UPDATE clients c SET
        client_name = '${req.client_name}', 
        client_cpf = '${req.client_cpf}', 
        client_cep = '${req.client_cep}', 
        client_logradouro = '${req.client_logradouro}', 
        client_bairro = '${req.client_bairro}', 
        client_cidade = '${req.client_cidade}', 
        client_uf = '${req.client_uf}', 
        client_complemento = '${req.client_complemento}', 
        st_registry_active = '${req.st_registry_active}',
        modified = NOW()
      WHERE id = ${req.id}`

    return query
  }

  static delete(id) {
    let query = `
      UPDATE clients SET 
        st_active = 0, 
        modified = NOW() 
      WHERE id = ${id}`
    return query
  }
}

module.exports = Client
