const ProductRepository = require('./ProductRepository');

module.exports = (databaseConnect) => {
    return async (ctx, next) => {
        let productRepository = new ProductRepository(databaseConnect);
        ctx.productRepository = productRepository;
        await next();
    }
}
