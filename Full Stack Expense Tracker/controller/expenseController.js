const dataModel = require('../model/dataModel');


// Get Data
exports.getExpense = async (req, res, next)=>{
    try{
        let data = await dataModel.findAll();
        res.status(200).json(data);
    }catch(err){
        console.log(err)
    };
}


// Add Data
exports.addExpense = async (req, res, next)=>{
    try{
        const expenseAmount = req.body.expenseAmount;
        const expenseDesc = req.body.expenseDesc;
        const expenseCate = req.body.expenseCate;
        let result = await dataModel.create({
            expenseAmount: expenseAmount,
            expenseDesc: expenseDesc,
            expenseCate: expenseCate
        });
        res.json(result);
    }catch(error){
        console.log(error);
    }
}


// Edit Data
exports.EditExpense = async (req, res, next)=>{
    try{
        const id = req.params.id;
        const updatedAmount = req.body.expenseAmount;
        const updatedDesc = req.body.expenseDesc;
        const updatedCate = req.body.expenseCate;
        const updatedResult = await dataModel.update(
            {
                expenseAmount: updatedAmount,
                expenseDesc: updatedDesc,
                expenseCate: updatedCate
            },{
                where: { id: id }
            }
        );
        res.status(200).json(updatedResult);
    }catch(error){
        console.log(error);
    }
}


// Delete Data
exports.deleteExpense = async (req, res, next)=>{
    try {
        // const id = req.params.id;
        const result = await dataModel.destroy({ where: { id: req.params.id } });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }   
}