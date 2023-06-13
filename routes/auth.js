const express = require('express');
const { Login, getMe, Logout } = require('../controllers/users/auth');
const router = express.Router();

/* GET home page. */
router.post('/login', Login);
router.get('/me', getMe);
router.get('/logout', Logout);

module.exports = router;
