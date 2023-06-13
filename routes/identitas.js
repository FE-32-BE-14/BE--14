const express = require('express');
const { getIdentitas, getIdentitasById, deleteIdentitas, updateIdentitas, createIdentitas } = require('../controllers/identitas/identitas');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/identitas', verifyUser, getIdentitas);
router.get('/identitas/:id', verifyUser, getIdentitasById);
router.delete('/identitas/:id', verifyUser, adminOnly, deleteIdentitas);
router.patch('/identitas/:id', verifyUser, updateIdentitas);
router.post('/identitas', verifyUser, createIdentitas);

module.exports = router;
