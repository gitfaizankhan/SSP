let form = document.querySelector("#my-form");
let amount = document.querySelector('#amount');
let discriptiton = document.querySelector('#discriptiton');
let category = document.querySelector('#category');
let count = 0;

form.addEventListener('submit',(e) => {
    e.preventDefault();
    count = count+1;
    expence ={
        amount : amount.value,
        discriptiton : discriptiton.value,
        category : category.value
    }
    document.querySelector("#my-form").reset();
    expenceSeralized = JSON.stringify(expence)
    localStorage.setItem(count+expence.amount+expence.discriptiton,expenceSeralized)
    addExpence(expence);
    console.log(count);
})

function addExpence(expence){
    let ul = document.getElementById("items");
    let li = document.createElement('li');
    li.className = "list-group-item";

    // create new text node using the createTextNode() method and appends it to the li element using the appendChild method.
    li.appendChild(document.createTextNode(`Amount = ${expence.amount}, Discriptiton = ${expence.discriptiton}, Expence = ${expence.category}`));
    
    //Edit button
    var editB = document.createElement('input');
    editB.type = 'button'
    editB.value = 'Edit'
    editB.className = "form-control bg-primary"
    editB.addEventListener('click',(e)=>{
        document.getElementById('amount').value = expence.amount;
        document.getElementById('discriptiton').value = expence.discriptiton;
        document.getElementById('category').value = expence.category;
        li.remove();
        localStorage.removeItem(count+expence.amount+expence.discriptiton,expenceSeralized);
    })
    
    //delete button
    var deleteB = document.createElement('input');
    deleteB.type = 'button'
    deleteB.value = 'Delete'
    deleteB.className = "form-control bg-primary"
    deleteB.addEventListener('click',(e) =>{
        localStorage.removeItem(count+expence.amount+expence.discriptiton,expenceSeralized);
        li.remove();
    })
    li.append(editB);
    li.append(deleteB);
    ul.append(li);
}

// get an array of all the keys stored in the localStorage object during page loading first time
Object.keys(localStorage).forEach((key) => {

    // retrieve the string value stored under the current key
    stringifiedDetailsOfExpence = localStorage.getItem(key);

    // convert into a JavaScript object
    detailsOfExpence = JSON.parse(stringifiedDetailsOfExpence);    
    addExpence(detailsOfExpence);
});

