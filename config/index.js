require('dotenv').config();

module.exports = {
    database: require('./databaseConfig'),
    mail: require('./mailConfig'),
    uploadFile: require('./uploadFileConfig'),
    onlinePaymentGateway: require('./onlinePaymentGatewayConfig')
};
