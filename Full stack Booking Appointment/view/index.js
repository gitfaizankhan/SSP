async function addUserData() {
    try {
        let name = document.getElementById('username').value;
        let mobile = document.getElementById('usermobile').value;
        let email = document.getElementById('useremail').value;
        let id = document.getElementById('id').value;
        let sellerData = {
            id,
            name,
            mobile,
            email
        }
        if (id === '') {
            await axios.post('http://localhost:4000/user/add-user', sellerData);
        } else {
            await axios.post('http://localhost:4000/user/edit-user/' + sellerData.id, sellerData);
        }
    } catch (error) {
        console.log(error);
    }
}

getUserData();
async function getUserData() {
    try {
        let showUser = await axios.get('http://localhost:4000/user/get-user');
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
    li.appendChild(document.createTextNode(`Name = ${data.name}, Mobile = ${data.mobile}, Email = ${data.email}`));

    //Edit button
    var editB = document.createElement('input');
    editB.type = 'button'
    editB.value = 'Edit'
    editB.className = "form-control bg-primary"
    editB.addEventListener('click', (e) => {
        document.getElementById('username').value = data.name;
        document.getElementById('usermobile').value = data.mobile;
        document.getElementById('useremail').value = data.email;
        document.getElementById('id').value = data.id;
        li.remove();
    })

    //delete button
    var deleteB = document.createElement('input');
    deleteB.type = 'button'
    deleteB.value = 'Delete'
    deleteB.className = "form-control bg-primary"
    deleteB.addEventListener('click', async (e) => {
        try {
            let deleteData = await axios.post('http://localhost:4000/user/delete-user/' + data.id);
            li.remove();
        } catch (error) {
            console.log(error);
        }
    })
    li.append(editB);
    li.append(deleteB);
    ul.append(li);
}
