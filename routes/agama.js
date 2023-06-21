const express = require('express');
const { getAgama, getAgamaById, deleteAgama, createAgama, updateAgama } = require('../controllers/identitas/agama');
const router = express.Router();

/* GET home page. */
router.get('/agama', getAgama);
router.get('/agama/:id', getAgamaById);
router.delete('/agama/:id', deleteAgama);
router.post('/agama', createAgama);
router.patch('/agama/:id', updateAgama);

module.exports = router;
