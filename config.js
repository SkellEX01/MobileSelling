require('dotenv').config();

module.exports = {
    database: require('./knexfile'),
    mail: {
        host: 'smtp.gmail.com',
        port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: 'champion.sphinx@gmail.com', // generated ethereal user
            pass: '1ccdd2cm' // generated ethereal password
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
