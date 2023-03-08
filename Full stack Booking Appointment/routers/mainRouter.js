const express = require('express');

const router = express.Router();
const mainController = require('../controller/mainController');

// get data


router.get('/get-user', mainController.getUser);

// post data
router.post('/add-user', mainController.addUser);

// update user data
router.post('/edit-user/:id', mainController.editUser);

// delete user data
router.post('/delete-user/:id', mainController.deleteUser);


module.exports = router;

// http://localhost:4000/user/add-user