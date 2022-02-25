const Router           = require('koa-router');
const SearchController = require('../controller/SearchController');

const router           = new Router();
const searchController = new SearchController();

router.get('/search', searchController.search);

module.exports = router;
