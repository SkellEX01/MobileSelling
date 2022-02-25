const CustomerRepository = require('./CustomerRepository');

module.exports = (databaseConnect) => {
    return async (ctx, next) => {
        let customerRepository = new CustomerRepository(databaseConnect);
        ctx.customerRepository = customerRepository;
        await next();
    }
}
