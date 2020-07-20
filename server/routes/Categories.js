const categories = require('../controllers/CategoryControllers');

function connectRoutes(router){
    router.post('/category/add',categories.create);
    router.get('/category/fetch',categories.fetchCategories)
}
module.exports.connect = connectRoutes;