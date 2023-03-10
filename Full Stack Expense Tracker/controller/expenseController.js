const dataModel = require('../model/dataModel');


exports.getExpense = async (req, res, next)=>{
    try{
        let data = await dataModel.findAll();
        res.json(data);
    }catch(err){
        console.log(err)
    };
}



exports.addExpense = async (req, res, next)=>{
    const expenseAmount = req.body.expenseAmount;
    const expenseDesc = req.body.expenseDesc;
    const expenseCate = req.body.expenseCate;
    let result = await dataModel.create({
        expenseAmount: expenseAmount,
        expenseDesc: expenseDesc,
        expenseCate: expenseCate
    });
    res.json(result);
}


exports.EditExpense = async (req, res, next)=>{
    const id = req.params.id;
    const updatedAmount = req.body.expenseAmount;
    const updatedDesc = req.body.expenseDesc;
    const updatedCate = req.body.expenseCate;
    const updatedResult  = await dataModel.update(
        {
            expenseAmount: updatedAmount,
            expenseDesc : updatedDesc,
            expenseCate : updatedCate
        }, {
            where:{id:id
            }
        }
    );
    res.json(updatedResult);
}

exports.deleteExpense = async (req, res, next)=>{
    const id = req.params.id;
    const result = await dataModel.destroy({where:{id: id}});
    res.json(result);
}