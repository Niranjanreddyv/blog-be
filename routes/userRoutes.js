
const express = require('express');

const router = express.Router();
const usersController = require('../controllers/usersController');
const verifyJWT = require('../middleware/verifyJWT');
// authentication 
// /api/users/login
router.post('/users/login',usersController.userLogin)
// /api/users

router.post('/users',usersController.registerUser)

// get the current user
router.get('/user', verifyJWT ,usersController.getCurrentUser)

// update the user
// router.put('/user',usersController.getCurrentUser)


module.exports = router;