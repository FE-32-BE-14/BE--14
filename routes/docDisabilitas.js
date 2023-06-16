const express = require('express');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();
const multer = require('multer');
const { getDocDisabilitas, getDocDisabilitasById, createDocDisabilitas, updateDocDisabilitas, deleteDocDisabilitas } = require('../controllers/disabilitas/doc_disabilitas');

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
router.get('/docdisabilitas', verifyUser, getDocDisabilitas);
router.get('/docdisabilitas/:id', verifyUser, getDocDisabilitasById);
router.post('/docdisabilitas/', verifyUser, adminOnly, upload.array('images'), createDocDisabilitas);
router.patch('/docdisabilitas/:id', verifyUser, adminOnly, upload.array('images'), updateDocDisabilitas);
router.delete('/docdisabilitas/:id', verifyUser, adminOnly, deleteDocDisabilitas);

module.exports = router;
