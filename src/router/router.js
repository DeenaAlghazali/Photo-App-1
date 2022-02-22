const express = require('express');
const controller = require('../controller');

const router = express.Router();

router.post('/search', controller.search);
router.use(controller.error404);
router.use(controller.error500);

module.exports = router;
