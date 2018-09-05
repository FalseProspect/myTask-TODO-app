// Local Storage
let data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
  todo: [],
  completed: []
};


// SVG Icons
let removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
let completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

//Initial Todo Render
renderTodoList(); 

// Menu status
let menuOpen = false; 

//Menu Event Listener
document.getElementById('Menu').addEventListener('click', menuClickEvent);

function menuClickEvent(){
  menuOpen = !menuOpen;
  //console.log(`Menu is: ${menuOpen === true ? 'open':'closed'}`);

  document.getElementById('itemBin').style.marginLeft = menuOpen === true ? '200px': '0';
  document.getElementById('sideMenu').style.transform = menuOpen === true ? 'translateX(0px)': 'translateX(-200px)';
  document.getElementById('itemBin').style.width = menuOpen === true ? 'calc(100% - 200px)': '100%';
};

//Add button pressed
document.getElementById('add').addEventListener('click', function(){
  let value = document.getElementById('item').value;
  //Get text in input field if any
  if(value){
    //If true add to to-do list
    submitItem(value);

  }
});

document.getElementById('item').addEventListener('keydown',function (e) {
  let value = document.getElementById('item').value;
  if (e.code === "Enter" && value) {
    submitItem(value);
  }
  });

  function submitItem(value){
    addItemTodo(value);
    document.getElementById('item').value = ''; //Clear input bar

    data.todo.push(value); //Push to data array
    dataObjectUpdate();
  };

function renderTodoList(){
  if (!data.todo.length && !data.completed.length) return;

  for (let i = 0; i < data.todo.length; i++){
    let value = data.todo[i];
    addItemTodo(value);
  }

  for (let i = 0; i < data.completed.length; i++){
    let value = data.completed[i];
    addItemTodo(value, true);
  }

};

function dataObjectUpdate(){
  localStorage.setItem('todoList', JSON.stringify(data));
  console.log(data);
};

function removeItem(){
  let deletingItem = this.parentNode.parentNode;
  let listParent = deletingItem.parentNode;
  listParent.removeChild(deletingItem);
  let listId = listParent.id;
  let itemValue = deletingItem.innerText; //Gets the text only, not list item

  if (listId === 'todo') {
    data.todo.splice(data.todo.indexOf(itemValue),1);
  } else{
    data.completed.splice(data.completed.indexOf(itemValue),1);
  }
  dataObjectUpdate();
}

function completeItem(){
  let completedItem = this.parentNode.parentNode;
  let listParent = completedItem.parentNode;
  let listId = listParent.id;
  let itemValue = completedItem.innerText; //Gets the text only, not list item

  if (listId === 'todo') {
    data.todo.splice(data.todo.indexOf(itemValue),1);
    data.completed.push(itemValue);
  } else{
    data.completed.splice(data.completed.indexOf(itemValue),1);
    data.todo.push(itemValue);
  }
  dataObjectUpdate();
  //Targeted list based on the list the item is currently contained in
  let targetList = (listId === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  listParent.removeChild(completedItem);
  targetList.insertBefore(completedItem, targetList.childNodes[0]);
}
//Add todo item
function addItemTodo(text, completed){
  let list = (completed) ? document.getElementById('completed') : document.getElementById('todo');

  let item = document.createElement('li');
  item.innerText = text;

  let buttons = document.createElement('div');
  buttons.classList.add ('buttons');

  let remove = document.createElement('button');
  remove.classList.add ('remove');
  remove.innerHTML = removeSVG;

  //Add button event to remove item
  remove.addEventListener('click', removeItem);

  let complete = document.createElement('button');
  complete.classList.add ('complete');
  complete.innerHTML = completeSVG;

  //Add button event to complete item
  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
}
