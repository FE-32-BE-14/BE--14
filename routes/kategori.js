const express = require('express');
const { getKategori, getKategoriById, deleteKategori, updatekategori, createKategori } = require('../controllers/disabilitas/kategori');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/kategori', verifyUser, getKategori);
router.get('/kategori/:id', verifyUser, getKategoriById);
router.delete('/kategori/:id', verifyUser, adminOnly, deleteKategori);
router.patch('/kategori/:id', verifyUser, adminOnly, updatekategori);
router.post('/kategori', verifyUser, adminOnly, createKategori);

module.exports = router;
