// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/development/development.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/development/migrations',
    },
    seeds: {
      directory: './data/development/seeds',
    }, 
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/testing/testing.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/testing/migrations',
    },
    seeds: {
      directory: './data/testing/seeds',
    },
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './data/production/production.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/production/migrations',
    },
    seeds: {
      directory: './data/production/seeds',
    }, 
  },

};
