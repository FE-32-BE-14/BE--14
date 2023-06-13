const express = require('express');
const { uploadFileCoba } = require('../controllers/cobaimage');
const router = express.Router();

/* GET home page. */
router.post('/uploadfile', uploadFileCoba);

module.exports = router;
