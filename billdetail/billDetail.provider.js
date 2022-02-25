const BillDetailRepository = require('./BillDetailRepository');

module.exports = (databaseConnect) => {
    return async (ctx, next) => {
        let billDetailRepository = new BillDetailRepository(databaseConnect);
        ctx.billDetailRepository = billDetailRepository;
        await next();
    }
}
