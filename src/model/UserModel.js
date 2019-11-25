class User {
  static getUserLogin(username, password) {
    let query = `
      SELECT 
        u.id,
        u.user_avatar,
        u.user_username,
        u.user_email,
        LOWER(r.role_name) as role
      FROM users u 
          LEFT JOIN roles r ON r.users_id = u.id
      WHERE u.st_active = 1 
        AND u.st_registry_active = 'S'
        AND (u.user_username = '${username}' OR LOWER(u.user_email) = LOWER('${username}'))
        AND u.user_password = '${password}'
    `
    return query
  }
}

module.exports = User
