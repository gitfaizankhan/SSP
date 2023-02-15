const ElectronicItems = document.getElementById('ElectronicItems');
const FoodItems = document.getElementById('FoodItems');
const SkincareItems = document.getElementById('SkincareItems');
const tableData = document.createElement('li');



var id;

// // POST DATA
function sellData(){
    var sellprice = document.getElementById('sellprice').value;
    var productname = document.getElementById('productname').value;
    var category = document.getElementById('category').value;
    let sellerData = {
        sellprice,
        productname,
        category
    }
    axios.post('https://crudcrud.com/api/e5b68ad560404240932de306ee9dc965/AppData', sellerData)
    .then((response)=>{
        console.log(response);
        location.reload();
    })
    .catch((error)=>{
        console.log(error);
    })

}

// GET DATA
getData();
function getData(){
    axios.get('https://crudcrud.com/api/e5b68ad560404240932de306ee9dc965/AppData')
    .then((response)=>{
        for(let i = 0; i < response.data.length; i++){
            windowData(response.data[i]);
        }
    })
    .catch((error)=>{
        console.log(error)
    })
}


// SHOW DATA ON WINDOW AND DELETE OPERTATION
function windowData(response){
    const tableData = document.createElement('li');
    tableData.textContent =  response.sellprice+" "+response.productname+" "+response.category;
    const btn = document.createElement('input');
    btn.type = 'button';
    btn.value = 'delete';

    // Delete USER DATA
    btn.onclick = () =>{
        axios
        .delete('https://crudcrud.com/api/e5b68ad560404240932de306ee9dc965/AppData/'+response._id)
        .then((response)=>{
            location.reload();
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    tableData.appendChild(btn);
    if(response.category === "Electronic Items"){
        ElectronicItems.appendChild(tableData);
    }else if(response.category === "Food Items"){
        FoodItems.appendChild(tableData);
    }
    else if(response.category === "Skincare Items"){
        SkincareItems.appendChild(tableData);
    }
}