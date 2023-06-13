const express = require('express');
const { getTujuandonasi, getTujuanDonasiById, createTujuanDonasi, updateTujuanDonasi, deleteTujuanDonasi } = require('../controllers/donasi/tujuan_donasi');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/tujuandonasi', verifyUser, getTujuandonasi);
router.post('/tujuandonasi', verifyUser, adminOnly, createTujuanDonasi);
router.get('/tujuandonasi/:id', verifyUser, getTujuanDonasiById);
router.patch('/tujuandonasi/:id', verifyUser, adminOnly, updateTujuanDonasi);
router.delete('/tujuandonasi/:id', verifyUser, adminOnly, deleteTujuanDonasi);

module.exports = router;
