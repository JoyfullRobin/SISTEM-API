const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleswares/authMiddleswares');

router.get('/users', authenticateToken, userController.listUsers);

module.exports = router;
