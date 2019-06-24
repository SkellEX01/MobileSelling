const Auth = require('./Authentication');

module.exports = () => {

    return async (ctx, next) => {
        let auth = new Auth(ctx.userRepository, ctx.clientRepository, ctx.hasher, ctx.session);
        ctx.authenticator = auth;
        await next();
    }
}