const express = require('express');
const { getTujuandonasi, getTujuanDonasiById, createTujuanDonasi, updateTujuanDonasi, deleteTujuanDonasi } = require('../controllers/donasi/tujuan_donasi');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './assets/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// console.log(upload);

/* GET home page. */
router.get('/tujuandonasi', verifyUser, getTujuandonasi);
router.post('/tujuandonasi', verifyUser, adminOnly, upload.single('img'), createTujuanDonasi);
router.get('/tujuandonasi/:id', verifyUser, getTujuanDonasiById);
router.patch('/tujuandonasi/:id', verifyUser, adminOnly, upload.single('img'), updateTujuanDonasi);
router.delete('/tujuandonasi/:id', verifyUser, adminOnly, deleteTujuanDonasi);

module.exports = router;
