const Multer = require('./Multer');
const multer = require('multer');

module.exports = (storage) => {
    return async (ctx, next) => {
        const transporter = multer.diskStorage(storage);
        ctx.upload = new Multer(transporter);
        await next();
    }
};
