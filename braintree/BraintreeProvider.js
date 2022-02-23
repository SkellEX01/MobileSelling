const braintree = require('braintree');

module.exports = (braintreeConfiguration) => {

    const environment = braintreeConfiguration.sandbox ? braintree.Environment.Sandbox : braintree.Environment.Production;

    const gateway = braintree.connect({ ...braintreeConfiguration, environment });

    return async(context, next) => {
        context.braintreeGateway = gateway;
        await next();
    }
};
