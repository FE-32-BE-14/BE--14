const express = require('express');
const { getBeasiswa, getBeasiswaById, createBeasiswa, updatebeasiswa, deletebeasiswa } = require('../controllers/beasiswa/beasiswa');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/beasiswa', verifyUser, getBeasiswa);
router.get('/beasiswa/:id', verifyUser, getBeasiswaById);
router.post('/beasiswa/', verifyUser, adminOnly, createBeasiswa);
router.patch('/beasiswa/:id', verifyUser, adminOnly, updatebeasiswa);
router.delete('/beasiswa/:id', verifyUser, adminOnly, deletebeasiswa);

module.exports = router;
