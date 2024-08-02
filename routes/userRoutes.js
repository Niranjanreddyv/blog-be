
const express = require('express');

const router = express.Router();
const usersController = require('../controllers/usersController')
// authentication 
// /api/users/login

// /api/users

router.get('/users',usersController.registerUser)

module.exports = router;