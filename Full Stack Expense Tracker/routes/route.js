const express = require('express');
const expenseController = require('../controller/expenseController');


const router = express.Router();


// Get
router.get('/get-expense', expenseController.getExpense);


// Add
router.post('/add-expense', expenseController.addExpense);

// Edit
router.put('/update-expense/:id', expenseController.EditExpense);

// Delete
router.delete('/delete-expense/:id', expenseController.deleteExpense);

module.exports = router;