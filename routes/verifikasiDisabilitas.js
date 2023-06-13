const express = require('express');
const { getVerifikasiDisabilitas, getVerifikasiDisabilitasById, createVerifikasiDisabilitas, updateVerifikasiDisabilitas, deleteVerifikasiDisabilitas } = require('../controllers/disabilitas/verifikasi_disabilitas');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/verifikasi', verifyUser, getVerifikasiDisabilitas);
router.get('/verifikasi/:id', verifyUser, getVerifikasiDisabilitasById);
router.patch('/verifikasi/:id', verifyUser, updateVerifikasiDisabilitas);
router.delete('/verifikasi/:id', verifyUser, adminOnly, deleteVerifikasiDisabilitas);
router.post('/verifikasi', verifyUser, createVerifikasiDisabilitas);

module.exports = router;
