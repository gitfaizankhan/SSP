// function result() {
//     var nameValue = document.getElementById("name").value;
//     var emailValue = document.getElementById("email").value;
//     var numberValue = document.getElementById("number").value;
//     var dateValue = document.getElementById("date").value;
//     var timeValue = document.getElementById("time").value;
//     // localStorage.setItem("name", nameValue);
//     // localStorage.setItem("email", emailValue);
//     // localStorage.setItem("number", numberValue);
//     // localStorage.setItem("date", dateValue);
//     // localStorage.setItem("time", timeValue);
//     var UserData = {
//         nameValue,
//         emailValue,
//         numberValue,
//         dateValue,
//         timeValue
//     }

    // axios.post('https://crudcrud.com/api/a5f499e8abf3443bab0c3c2aff9e6536/AppData', UserData)
    // .then((response)=>{
    //     console.log(response);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })

//  }

function result() {
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("emailID").value;
    var numberValue = document.getElementById("mobile").value;
    var dateValue = document.getElementById("date").value;
    var timeValue = document.getElementById("time").value;

//    localStorage.setItem("name", nameValue);
//    localStorage.setItem("email", emailValue);
//    localStorage.setItem("number", numberValue);
//    localStorage.setItem("date", dateValue);
//    localStorage.setItem("time", timeValue);

    let userData = {
        nameValue,
        emailValue,
        numberValue,
        dateValue,
        timeValue
    }
    // localStorage.setItem("userData", userData);
    // let UserDataInfo = JSON.stringify(userData);
    
    // localStorage.setItem(userData.emailID, UserDataInfo);
    // let GetUserInfo = localStorage.getItem("userData");
    // let UserInfo = JSON.parse(localStorage.getItem("userData"));

    // windowData(userData)
// PoST DATA CRUD CRUD
    axios.post('https://crudcrud.com/api/8c92d1ba838242d9b476ed877fe23d83/AppData', userData)
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
    getData();
}

// getData From CRUDCRUD API
getData();
function getData(){
    axios.get('https://crudcrud.com/api/8c92d1ba838242d9b476ed877fe23d83/AppData')
    .then((response)=>{
        for(let i = 0; i < response.data.length; i++){
            windowData(response.data[i]);
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}


function windowData(userData){
    const myTable = document.getElementById('dataTable');
    const tableData = document.createElement('li');
    tableData.textContent = userData.nameValue +" "+ userData.emailValue+" "+userData.numberValue+" "+userData.dateValue+" "+userData.timeValue;

    const Editbtn = document.createElement('input');
    Editbtn.type = 'button';
    Editbtn.value = 'edit';

    var keys = Object.keys(userData);
    // keys.forEach(element => {
    //     document.getElementById(element).value = '';
    // });
    

    Editbtn.onclick = () =>{
        document.getElementById('name').value = userData.name;
        document.getElementById('emailID').value = userData.emailID;
        document.getElementById('mobile').value = userData.mobile;
        document.getElementById('date').value = userData.date;
        document.getElementById('time').value = userData.time;
        localStorage.removeItem(userData.emailID);
        myTable.removeChild(tableData);
        
    }
    const btn = document.createElement('input');
    btn.type = 'button';
    btn.value = 'delete';
    btn.onclick = () =>{
        localStorage.removeItem(userData.emailID);
        myTable.removeChild(tableData);
        
    }

    
    tableData.appendChild(btn);
    tableData.appendChild(Editbtn);
    myTable.appendChild(tableData);


}
