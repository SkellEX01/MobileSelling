require('dotenv').config();

module.exports = {
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