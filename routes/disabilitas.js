const express = require('express');
const { getDisabilitas, getDisabilitasById, createDisabilitas, updateDisabilitas, deleteDisabilitas } = require('../controllers/disabilitas/disabilitas');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/disabilitas', verifyUser, getDisabilitas);
router.get('/disabilitas/:id', verifyUser, getDisabilitasById);
router.post('/disabilitas', verifyUser, adminOnly, createDisabilitas);
router.patch('/disabilitas/:id', verifyUser, adminOnly, updateDisabilitas);
router.delete('/disabilitas/:id', verifyUser, adminOnly, deleteDisabilitas);

module.exports = router;
