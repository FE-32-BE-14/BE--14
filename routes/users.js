const express = require('express');
const { getUsers, getUsersById, createUsers, deleteUsers, updateUsers } = require('../controllers/users/users');
const { verifyUser, adminOnly } = require('../middleware/middleware');
const router = express.Router();

/* GET home page. */
router.get('/users', verifyUser, getUsers);
router.get('/users/:id', verifyUser, getUsersById);
router.delete('/users/:id', verifyUser, adminOnly, deleteUsers);
router.post('/users', createUsers);
router.patch('/users/:id', verifyUser, adminOnly, updateUsers);

module.exports = router;
