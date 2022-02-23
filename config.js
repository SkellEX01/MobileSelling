require('dotenv').config();

module.exports = {
    database: {
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
    },
    
    mail: {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'champion.sphinx@gmail.com', 
            pass: '1ccdd2cm' 
        }
    },
    
    uploadFile: {
        destination(req, file, cb) {
            cb(null, './views/Admin/images/product');
        },
    },
    
    onlinePaymentGateway: {
        brainTree: {
            sandbox     : true,
            merchantId  : process.env.BRAINTREE_MERCHANT_ID,
            publicKey   : process.env.BRAINTREE_PUBLIC_KEY,
            privateKey  : process.env.BRAINTREE_PRIVATE_KEY
        },
        stripe: {
        
        },
        square: {
        
        }
    } 
};
