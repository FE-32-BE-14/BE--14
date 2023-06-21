const express = require('express');
const { getProvinsi, getProvinsiById, getKabupatenByProvinsi, getKabupatenById, getKecamatanByKabupaten, getKecamatanById, getDesaByKecamatan, getDesaById } = require('../controllers/identitas/alamat');
const router = express.Router();

/* GET home page. */
router.get('/provinsi', getProvinsi);
router.get('/provinsi/:id', getProvinsiById);
router.get('/kabupatenbyprovinsi/:id', getKabupatenByProvinsi);
router.get('/kabupaten/:id', getKabupatenById);
router.get('/kecamatanbykabupaten/:id', getKecamatanByKabupaten);
router.get('/kecamatan/:id', getKecamatanById);
router.get('/desabykecamatan/:id', getDesaByKecamatan);
router.get('/desa/:id', getDesaById);

module.exports = router;
