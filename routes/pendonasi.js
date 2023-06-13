const express = require('express');
const { getPendonasi, getPendonasiById, createPendonasi, updatePendonasi, deletePendonasi } = require('../controllers/donasi/pendonasi');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/pendonasi', verifyUser, getPendonasi);
router.get('/pendonasi/:id', verifyUser, getPendonasiById);
router.post('/pendonasi', verifyUser, createPendonasi);
router.patch('/pendonasi/:id', verifyUser, updatePendonasi);
router.delete('/pendonasi/:id', verifyUser, adminOnly, deletePendonasi);

module.exports = router;
