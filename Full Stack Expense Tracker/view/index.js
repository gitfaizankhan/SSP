async function addExpense() {
    try {
        let amount = document.getElementById('amount').value;
        let discriptiton = document.getElementById('discriptiton').value;
        let category = document.getElementById('category').value;
        let id = document.getElementById('id').value;
        let expenseData = {
            id: id,
            expenseAmount: amount,
            expenseDesc: discriptiton,
            expenseCate: category
        }
        if (id === '') {
            await axios.post('http://localhost:5000/expense/add-expense', expenseData);
        } else {
            await axios.put('http://localhost:5000/expense/update-expense/' + expenseData.id, expenseData);
        }
    } catch (error) {
        console.log(error);
    }
}

getExpenseData();
async function getExpenseData() {
    try {
        let showUser = await axios.get('http://localhost:5000/expense/get-expense');
        for (let data of showUser.data) {
            addDataTable(data);
        }
    } catch (error) {
        console.log(error);
    }
}


// Add Data Table 
function addDataTable(data) {
    let ul = document.getElementById("items");
    let li = document.createElement('li');
    const space = document.createTextNode("\u00a0");
    
    li.appendChild(document.createTextNode(`Amount = ${data.expenseAmount} || Description = ${data.expenseDesc} || Category = ${data.expenseCate}`));

    //Edit
    var editB = document.createElement('input');
    editB.type = 'button'
    editB.value = 'Edit'
    editB.addEventListener('click', (e) => {
        document.getElementById('id').value = data.id;
        document.getElementById('amount').value = data.expenseAmount;
        document.getElementById('discriptiton').value = data.expenseDesc;
        document.getElementById('category').value = data.expenseCate;
        li.remove();
    });

    //delete
    var deleteB = document.createElement('input');
    deleteB.type = 'button'
    deleteB.value = 'Delete'
    deleteB.addEventListener('click', async (e) => {
        try {
            await axios.delete('http://localhost:5000/expense/delete-expense/' + data.id);
            li.remove();
        } catch (error) {
            console.log(error);
        }
    });
    li.append(space);
    li.append(editB);
    li.append(deleteB);
    ul.append(li);
}
