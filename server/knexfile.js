// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user:     'postgres',
      password: 'password',
      database: 'controle_presenca'
    },
    migrations: {
      directory: './migrations'
    }
  }
};
