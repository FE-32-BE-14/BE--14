const express = require('express');
const { getDetailBeasiswa, getDetailBeasiswaById, createDetailBeasiswa, deleteDetailBeasiswa, updateDetailBeasiswa } = require('../controllers/beasiswa/detail_beasiswa');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/detailbeasiswa', verifyUser, getDetailBeasiswa);
router.get('/detailbeasiswa/:id', verifyUser, getDetailBeasiswaById);
router.post('/detailbeasiswa', verifyUser, createDetailBeasiswa);
router.delete('/detailbeasiswa/:id', verifyUser, adminOnly, deleteDetailBeasiswa);
router.patch('/detailbeasiswa/:id', verifyUser, updateDetailBeasiswa);

module.exports = router;
