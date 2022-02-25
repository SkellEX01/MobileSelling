const CategoryRepository = require('./CategoryRepository');

module.exports = (databaseConnect) => {
    return async (ctx, next) => {
        let categoryRepository = new CategoryRepository(databaseConnect);
        ctx.categoryRepository = categoryRepository;
        await next();
    }
}
