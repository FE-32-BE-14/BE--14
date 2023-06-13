const express = require('express');
const { getDonasi, getDonasiById, createDonasi, updateDonasi, deleteDonasi } = require('../controllers/donasi/donasi');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/donasi', verifyUser, getDonasi);
router.get('/donasi/:id', verifyUser, getDonasiById);
router.patch('/donasi/:id', verifyUser, updateDonasi);
router.delete('/donasi/:id', verifyUser, adminOnly, deleteDonasi);
router.post('/donasi', verifyUser, createDonasi);

module.exports = router;
