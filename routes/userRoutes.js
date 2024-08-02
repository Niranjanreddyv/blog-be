
const express = require('express');

const router = express.Router();
const usersController = require('../controllers/usersController')
// authentication 
// /api/users/login
router.post('/users/login',usersController.userLogin)
// /api/users

router.post('/users',usersController.registerUser)

module.exports = router;