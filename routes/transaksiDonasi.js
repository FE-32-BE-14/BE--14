const express = require('express');
const { getTransaksiDonasi, getTransaksiDonasiById, createTransaksiDonasi, updateTransaksiDonasi, deleteTransaksiDonasi } = require('../controllers/donasi/transaksi_donasi');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/transaksidonasi', verifyUser, getTransaksiDonasi);
router.get('/transaksidonasi/:id', verifyUser, getTransaksiDonasiById);
router.patch('/transaksidonasi/:id', verifyUser, updateTransaksiDonasi);
router.delete('/transaksidonasi/:id', verifyUser, adminOnly, deleteTransaksiDonasi);
router.post('/transaksidonasi', verifyUser, createTransaksiDonasi);

module.exports = router;
