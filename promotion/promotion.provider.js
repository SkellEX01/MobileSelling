const PromotionRepository = require('./PromotionRepository');

module.exports = (databaseConnect) => {
    return async (ctx, next) => {
        let promotionRepository = new PromotionRepository(databaseConnect);
        ctx.promotionRepository = promotionRepository;
        await next();
    }
}
