const BillRepository = require('./BillRepository');

module.exports = (databaseConnect) => {
    return async (ctx, next) => {
        let billRepository = new BillRepository(databaseConnect);
        ctx.billRepository = billRepository;
        await next();
    }
}
