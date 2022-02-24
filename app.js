require('dotenv').config();
const Koa                           = require('koa');
const config                        = require('./config');
const knex                          = require('knex')(config.database.development);
const loadStaticFile                = require('koa-static');
const path                          = require('path');
const bodyParser                    = require('koa-bodyparser');
const session                       = require('koa-session');

const nunjuck                       = require('./nunjucks.provider');
const authProvider                  = require('./auth/Auth.Provider');
const userProvider                  = require('./user/UserProvider');
const hasherProvider                = require('./hasher/hasherProvider');
const categoryProvider              = require('./category/Category.provider');
const productProvider               = require('./product/Product.provider');
const promotionProvider             = require('./promotion/Promotion.provider');
const billProvider                  = require('./bill/Bill.provider');
const billDetailProvider            = require('./billdetail/BillDetail.provider');
const onlinePaymentGatewayProvider  = require('./braintree/BraintreeProvider');
const customerProvider              = require('./customer/Customer.provider');
const mailerProvider                = require('./mailer/Mail.provider');
const multerProvider                = require('./multer/Multer.provider');

const routerLogin                   = require('./router/RouterLogin');
const routerAdmin                   = require('./router/RouterAdmin');
const routerDashboard               = require('./router/RouteDashboard');
const routerCategory                = require('./router/RouterCategory');
const routerProduct                 = require('./router/RouterProduct');
const routerHomePage                = require('./router/RouterHomePage');
const routerCategoryClient          = require('./router/RouterCategoryClient');
const routerSearch                  = require('./router/RouteSearch');
const routerDetail                  = require('./router/RouterDetail');
const routerAddCart                 = require('./router/RouterAddCart');
const routerCart                    = require('./router/RouterCart');
const routerRemoveCart              = require('./router/RouterRemoveCart');
const routerCheckout                = require('./router/RouterCheckout');
const routerSuccess                 = require('./router/RouterSuccess');

const app = new Koa();

app.keys = ['some-secret-key'];

app.use(loadStaticFile(path.join(__dirname, '/views/Admin')));

app.use(session(app));
app.use(hasherProvider(10));
app.use(bodyParser());
app.use(nunjuck());
app.use(multerProvider(config.uploadFile));
app.use(mailerProvider(config.mail));
app.use(onlinePaymentGatewayProvider(config.onlinePaymentGateway.brainTree));
app.use(userProvider(knex));
app.use(productProvider(knex));
app.use(categoryProvider(knex));
app.use(promotionProvider(knex));
app.use(billProvider(knex));
app.use(billDetailProvider(knex));
app.use(customerProvider(knex));
app.use(authProvider());
app.use(routerLogin.routes());
app.use(routerDashboard.routes());
app.use(routerAdmin.routes());
app.use(routerCategory.routes());
app.use(routerProduct.routes());
app.use(routerHomePage.routes());
app.use(routerCategoryClient.routes());
app.use(routerSearch.routes());
app.use(routerDetail.routes());
app.use(routerAddCart.routes());
app.use(routerCart.routes());
app.use(routerRemoveCart.routes());
app.use(routerCheckout.routes());
app.use(routerSuccess.routes());

app.listen(process.env.PORT || 3000, () => console.log(`Server listen port ${process.env.PORT || 3000}`));
