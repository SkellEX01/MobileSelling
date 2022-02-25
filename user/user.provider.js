const UserRepository = require('./UserRepository');

module.exports = (knex) => {
    return async (ctx, next) => {
        let userRepository = new UserRepository(knex);
        ctx.userRepository = userRepository;

        await next();
    }
}