const categories = require('../controllers/CategoryControllers');

function connectRoutes(router){
    router.post('/category/add',categories.create);
}
module.exports.connect = connectRoutes;