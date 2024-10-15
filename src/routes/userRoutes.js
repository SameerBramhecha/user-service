const express = require('express');
const { registerUser, loginUser, hello } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/',hello);

module.exports = router;
