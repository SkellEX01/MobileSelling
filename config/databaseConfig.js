require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host     : process.env.DB_HOST,
            user     : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB_NAME
        }
    },

    staging: {
        client: 'mysql',
        connection: {
            database  : 'my_db',
            user      : 'username',
            password  : 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'mysql',
        connection: {
            database  : 'my_db',
            user      : 'username',
            password  : 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
}