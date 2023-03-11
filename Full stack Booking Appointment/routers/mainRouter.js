const express = require('express');
const mainController = require('../controller/mainController');

const router = express.Router();


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