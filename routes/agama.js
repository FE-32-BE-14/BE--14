const express = require('express');
const { getAgama, getAgamaById, deleteAgama, createAgama, updateAgama } = require('../controllers/identitas/agama');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/agama', verifyUser, getAgama);
router.get('/agama/:id', verifyUser, getAgamaById);
router.delete('/agama/:id', verifyUser, adminOnly, deleteAgama);
router.post('/agama', verifyUser, adminOnly, createAgama);
router.patch('/agama/:id', verifyUser, adminOnly, updateAgama);

module.exports = router;
