// var headderTitle = document.getElementById("header-title");
// headderTitle.style.border = 'solid 3px #000';

// var addItem = document.getElementsByClassName('title');
// addItem[0].style.color = 'Green';
// addItem[0].style.fontWeight = 'bold';


// var item = document.getElementsByClassName('list-group-item');
// var it = document.getElementsByTagName('li');
// console.log(typeof it);




// for(let it of item){
//     it.style.fontWeight = 'bold';
// }

// var qitem = document.querySelectorAll(".list-group-item");
// console.log(qitem[1]);

// // Make the 2nd item have green background color
// // qitem[1].style.backgroundColor = 'green';

// // Make the 3rd item invisible
// // item[2].style.display = "none";


// // Using QuerySelectorALL change the font color to green for 2nd item in the item list
// qitem[1].style.color = 'green';



// // Choose all the odd elements and make their background green using QuerySelectorALL﻿
// for(let i = 0; i < qitem.length; i++){
//     console.log(qitem[i].textContent);
//     if(i % 2 == 0){
//         qitem[i].style.backgroundColor = 'green';
//     }
// }


// const imgElement = document.getElementById('myImg');
// imgElement.setAttribute('src', 'new-image.jpg');


// // parentElement
// const element = document.getElementById('some-element');
// const parent = element.parentElement;


// // lastelementchild
// const parentElement = document.getElementById('parent');
// const lastChild = parentElement.lastElementChild;
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}