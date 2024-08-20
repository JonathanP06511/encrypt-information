const { Router } = require('express');
const router = new Router();
const { encryptCredentials } = require('../controllers/encryptionController');

router.get('/:mail/:password', encryptCredentials);

module.exports = router;
