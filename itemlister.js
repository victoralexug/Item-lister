var form = document.querySelector('#addform');
var itemList = document.querySelector('#items');

form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();
 
  var newItem = document.querySelector('#item');
  var li = document.createElement('li');
  li.className = 'list-group-item';

  li.appendChild(document.createTextNode(newItem.value));

  var deletebtn = document.createElement('button');
  deletebtn.className = 'btn btn-danger btn-sm float-right delete';
  var del = document.createTextNode('x');
  deletebtn.appendChild(del);

  li.appendChild(deletebtn);

  itemList.appendChild(li);
};

itemList.addEventListener('click', deleteItem);

function deleteItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('are you sure')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
  li.style.display = 'none';
};
