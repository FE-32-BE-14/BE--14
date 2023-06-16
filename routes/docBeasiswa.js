const express = require('express');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();
const multer = require('multer');
const { createDocBeasiswa, getDocBeasiswa, getDocBeasiswaById, deleteDocBeasiswa, updateDocBeasiswa } = require('../controllers/beasiswa/doc_beasiswa');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './assets/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// /* GET home page. */
router.get('/docbeasiswa', verifyUser, getDocBeasiswa);
router.get('/docbeasiswa/:id', verifyUser, getDocBeasiswaById);
router.post('/docbeasiswa/', verifyUser, adminOnly, upload.array('images'), createDocBeasiswa);
router.patch('/docbeasiswa/:id', verifyUser, adminOnly, upload.array('images'), updateDocBeasiswa);
router.delete('/docbeasiswa/:id', verifyUser, adminOnly, deleteDocBeasiswa);

module.exports = router;
