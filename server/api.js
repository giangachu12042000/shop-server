const express = require('express');
const router = express.Router();

require('./routes/Categories').connect(router);
require('./routes/Products').connect(router);

module.exports = router
// ==============================================//
