const ElectronicItems = document.getElementById('ElectronicItems');
const FoodItems = document.getElementById('FoodItems');
const SkincareItems = document.getElementById('SkincareItems');
const tableData = document.createElement('li');



var id;

// // POST DATA
async function sellData(){
    try{
        var sellprice = document.getElementById('sellprice').value;
        var productname = document.getElementById('productname').value;
        var category = document.getElementById('category').value;
        let sellerData = {
            sellprice,
            productname,
            category
        }
        
        let response = await axios.post('https://crudcrud.com/api/293edc4f95ac4593abc2fb50e169a658/AppData', sellerData);
        windowData(response.data);
    }catch(error){
        document.getElementById('error').innerHTML = `${error.message}`;
    }
}

// GET DATA
getData();

async function getData(){
    try{
        let sellerSell = await axios.get('https://crudcrud.com/api/293edc4f95ac4593abc2fb50e169a658/AppData');
        for(let data of sellerSell.data){
            windowData(data);
        }
    }catch(error){
        console.log(error);
    }
}


// SHOW DATA ON WINDOW AND DELETE OPERTATION
function windowData(response){
    const tableData = document.createElement('li');
    tableData.textContent =  response.sellprice+" "+response.productname+" "+response.category;
    const btn = document.createElement('input');
    btn.type = 'button';
    btn.value = 'delete';

    // Delete USER DATA
    btn.onclick =  async () =>{
        try{
            let deleteData = await axios.delete('https://crudcrud.com/api/293edc4f95ac4593abc2fb50e169a658/AppData/'+response._id);
            tableData.remove();
        }catch(error){
            console.log(error);
        }
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