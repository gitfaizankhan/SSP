async function addUserData() {
    // console.log("SELLER DATA ", sellerData);
    try {
        let amount = document.getElementById('amount').value;
        let discriptiton = document.getElementById('discriptiton').value;
        let category = document.getElementById('category').value;
        let id = document.getElementById('id').value;
        let sellerData = {
            id: id,
            expenseAmount: amount,
            expenseDesc: discriptiton,
            expenseCate: category
        }
        console.log("SELLER DATA ", sellerData);
        if (id === '') {
            await axios.post('http://localhost:5000/expense/add-expense', sellerData);
        } else {
            await axios.post('http://localhost:5000/expense/update-expense/' + sellerData.id, sellerData);
        }
    } catch (error) {
        console.log(error);
    }
}

getUserData();
async function getUserData() {
    try {
        let showUser = await axios.get('http://localhost:5000/expense/get-expense');
        for (let data of showUser.data) {
            addDataTable(data);
        }
    } catch (error) {
        console.log(error);
    }
}



function addDataTable(data) {
    let ul = document.getElementById("items");
    let li = document.createElement('li');
    li.className = "list-group-item";

    // create new text node using the createTextNode() method and appends it to the li element using the appendChild method.
    li.appendChild(document.createTextNode(`Amount = ${data.expenseAmount}, Description = ${data.expenseDesc}, Category = ${data.expenseCate}`));

    //Edit button
    var editB = document.createElement('input');
    editB.type = 'button'
    editB.value = 'Edit'
    editB.className = "form-control bg-primary"
    editB.addEventListener('click', (e) => {
        document.getElementById('id').value = data.id;
        document.getElementById('amount').value = data.expenseAmount;
        document.getElementById('discriptiton').value = data.expenseDesc;
        document.getElementById('category').value = data.expenseCate;
        
        li.remove();
    })

    //delete button
    var deleteB = document.createElement('input');
    deleteB.type = 'button'
    deleteB.value = 'Delete'
    deleteB.className = "form-control bg-primary"
    deleteB.addEventListener('click', async (e) => {
        try {
            let deleteData = await axios.post('http://localhost:5000/expense/delete-expense/' + data.id);
            li.remove();
        } catch (error) {
            console.log(error);
        }
    })
    li.append(editB);
    li.append(deleteB);
    ul.append(li);
}
