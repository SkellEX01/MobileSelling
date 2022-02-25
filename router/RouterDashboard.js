const Router = require('koa-router');
const DashboardController = require('../controller/DashboardController');
const logginRequiredMiddleware = require('../middleware/logginRequiredMiddleware');

const router = new Router();
const dashboardController = new DashboardController();

router.get('/dashboard', logginRequiredMiddleware, dashboardController.getDashboard);

router.get('/logout', dashboardController.logout)

module.exports = router;