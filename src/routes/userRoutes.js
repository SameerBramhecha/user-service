const express = require('express');
const { registerUser, loginUser, hello, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/',hello);
router.get('/users', getAllUsers);

module.exports = router;
