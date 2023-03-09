const express = require('express');
const expenseController = require('../controller/expenseController');


const router = express.Router();


// Get Expense http://localhost:5000/expense/get-expense
router.get('/get-expense', expenseController.getExpense);


// Add Expense http://localhost:5000/expense/add-expense
router.post('/add-expense', expenseController.addExpense);

// Edit Expense http://localhost:5000/expense/update-expense/:id
router.post('/update-expense/:id', expenseController.EditExpense);

// delete expense http://localhost:5000/expense/delete-expense/:id
router.post('/delete-expense/:id', expenseController.deleteExpense);

module.exports = router;