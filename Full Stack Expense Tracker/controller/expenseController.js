const dataModel = require('../model/dataModel');


exports.getExpense = (req, res, next)=>{
    dataModel.findAll()
    .then(data=>{
        res.json(data);
    })
    .catch(error=>{
        console.log(error);
    });
}



exports.addExpense = (req, res, next)=>{
    const expenseAmount = req.body.expenseAmount;
    const expenseDesc = req.body.expenseDesc;
    const expenseCate = req.body.expenseCate;
    console.log("Called");
    dataModel.create({
        expenseAmount: expenseAmount,
        expenseDesc: expenseDesc,
        expenseCate: expenseCate
    })
    .then(result=>{
        res.json(result);
    })
    .catch(error=>{
        console.log(error);
    });
}


exports.EditExpense = (req, res, next)=>{
    const id = req.params.id;
    const updatedAmount = req.body.expenseAmount;
    const updatedDesc = req.body.expenseDesc;
    const updatedCate = req.body.expenseCate;
    dataModel.findByPk(id).then(data=>{
        data.expenseAmount = updatedAmount,
        data.expenseDesc = updatedDesc,
        data.expenseCate = updatedCate

        return data.save();
    }).then(result=>{
        res.json(result);
    }).catch(error=>{
        console.log(error);
    });
}

exports.deleteExpense = (req, res, next)=>{
    const id = req.params.id;
    console.l
    dataModel.findByPk(id)
    .then(expense=>{
        return expense.destroy();
    }).then(result=>{
        res.json(result);
    }).catch(error=>{
        console.log(error);
    });
}