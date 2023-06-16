const express = require('express');
const { getBeasiswa, getBeasiswaById, createBeasiswa, updatebeasiswa, deletebeasiswa } = require('../controllers/beasiswa/beasiswa');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();
// const upload = require('../multer');

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
router.get('/beasiswa', verifyUser, getBeasiswa);
router.get('/beasiswa/:id', verifyUser, getBeasiswaById);
// router.post('/beasiswa/', verifyUser, adminOnly, upload.single('img'), createBeasiswa);
router.post('/beasiswa/', verifyUser, adminOnly, upload.single('img'), createBeasiswa);
router.patch('/beasiswa/:id', verifyUser, adminOnly, upload.single('img'), updatebeasiswa);
router.patch('/beasiswa/:id', verifyUser, adminOnly, updatebeasiswa);
router.delete('/beasiswa/:id', verifyUser, adminOnly, deletebeasiswa);

module.exports = router;
