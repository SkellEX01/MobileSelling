const Mailer = require('./Mailer');
const nodemailer = require("nodemailer");

module.exports = (config) => {
    return async (ctx, next) => {
        let transporter = nodemailer.createTransport(config);
        ctx.mailer = new Mailer(transporter);
        await next();
    }
};
