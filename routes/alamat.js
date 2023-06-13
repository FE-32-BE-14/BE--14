const express = require('express');
const { getProvinsi, getProvinsiById, getKabupatenByProvinsi, getKabupatenById, getKecamatanByKabupaten, getKecamatanById, getDesaByKecamatan, getDesaById } = require('../controllers/identitas/alamat');
const { verifyUser } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/provinsi', verifyUser, getProvinsi);
router.get('/provinsi/:id', verifyUser, getProvinsiById);
router.get('/kabupatenbyprovinsi/:id', verifyUser, getKabupatenByProvinsi);
router.get('/kabupaten/:id', verifyUser, getKabupatenById);
router.get('/kecamatanbykabupaten/:id', verifyUser, getKecamatanByKabupaten);
router.get('/kecamatan/:id', verifyUser, getKecamatanById);
router.get('/desabykecamatan/:id', verifyUser, getDesaByKecamatan);
router.get('/desa/:id', verifyUser, getDesaById);

module.exports = router;
