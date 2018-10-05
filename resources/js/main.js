//Branch: Phase 2

//localStorage.clear();

//Client Username
let username = '';

// Local Storage
  //Todo List Data
  let data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
  todo: [],
  completed: [],
  deleted: []
  };

  
  // Theme Index
  let themeIndex = (localStorage.getItem('themeIndex')) ? JSON.parse(localStorage.getItem('themeIndex')) : 0 ;

  // Night mode status
  let nightMode = (localStorage.getItem('nightMode')) ? JSON.parse(localStorage.getItem('nightMode')) : false;
 
  // menuOpen status
  let menuOpen = (localStorage.getItem('menuOpen')) ? JSON.parse(localStorage.getItem('menuOpen')) : false;
  
// SVG Icons
let removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
let completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';
let themeSVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-167.5 435.5 30 30" style="enable-background:new -167.5 435.5 30 30;" xml:space="preserve"><g><path class="fill" d="M-141.8,440.9c-3-3.5-7-5.4-11.2-5.4c-3.5,0-6.9,1.4-9.4,3.8c-4,3.9-5.4,8.6-3.7,12.9c1.4,3.4,4.6,5.9,7.8,5.9c0.1,0,0.2,0,0.3,0c0.5,0,0.9-0.1,1.4-0.1c0.5,0,1-0.1,1.5-0.1c1.1,0,2,0,2,2.7c0,2.9,1.8,4.9,4.3,4.9c0,0,0,0,0,0c1.8,0,3.8-1,5.8-3c2.6-2.6,4.4-6.3,4.8-10.1C-137.8,448.2-139.1,444.1-141.8,440.9z M-144.5,461c-1.6,1.6-3.1,2.4-4.3,2.4c-1.6,0-2.2-1.5-2.2-2.9c0-3.3-1.3-4.8-4.1-4.8c-0.5,0-1.1,0-1.7,0.1c-0.4,0-0.9,0.1-1.3,0.1c-0.1,0-0.1,0-0.2,0c-2.3,0-4.8-1.9-5.9-4.6c-1.4-3.4-0.2-7.3,3.2-10.6c2.1-2.1,5-3.2,8-3.2c3.6,0,7,1.7,9.6,4.7C-138.3,448.2-140,456.4-144.5,461z"/><path class="fill" d="M-148,452.3c0,1.7,1.4,3.2,3.1,3.2c1.7,0,3.1-1.4,3.1-3.2c0-1.7-1.4-3.2-3.1-3.2C-146.6,449.1-148,450.5-148,452.3z M-143.9,452.3c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1C-144.3,451.2-143.9,451.7-143.9,452.3z"/><path class="fill" d="M-144.6,444.9c0-1.7-1.4-3.2-3.1-3.2c-1.7,0-3.1,1.4-3.1,3.2c0,1.7,1.4,3.2,3.1,3.2C-146,448.1-144.6,446.7-144.6,444.9z M-148.8,444.9c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1C-148.3,446-148.8,445.5-148.8,444.9z"/><path class="fill" d="M-154.9,439.5c-1.7,0-3.1,1.4-3.1,3.2c0,1.7,1.4,3.2,3.1,3.2s3.1-1.4,3.1-3.2C-151.8,440.9-153.2,439.5-154.9,439.5z M-154.9,443.7c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C-153.8,443.2-154.3,443.7-154.9,443.7z"/><path class="fill" d="M-160.3,444.9c-1.7,0-3.1,1.4-3.1,3.2c0,1.7,1.4,3.2,3.1,3.2s3.1-1.4,3.1-3.2C-157.2,446.3-158.6,444.9-160.3,444.9z M-160.3,449.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C-159.3,448.6-159.8,449.1-160.3,449.1z"/></g></svg>';

// Views
const viewings = {
  TASKS: 'tasks',
  DELETED: 'deleted',
  DONE_TASKS: 'completed',
}

//Initiate starting view
let view = viewings.TASKS;

//Themes
const theme = function(themeName,mainColor){
  this.name = themeName;
  this.mainColor = mainColor;
};
const themes = [
  new theme('Honey','RGBA(243,167,18,1)'),    // #F3A712 RGBA(243,167,18,1)
  new theme('Royal','RGBA(70,35,122,1)'),     // #46237a RGBA(70,35,122,1)
  new theme('Ocean','RGBA(69,74,222,1)'),     // #454ADE RGBA(69,74,222,1)
  new theme('Pumpkin','RGBA(255,78,0,1)'),    // #FF4E00 RGBA(255,78,0,1)
  new theme('Rum','RGBA(80,31,50,1)'),        // #501F32 RGBA(80,31,50,1)
  new theme('Sky', 'skyblue'),
  new theme('Salmon','RGBA(255,113,91,1)'),   // #FF715B RGBA(255,113,91,1)
  new theme('Mint','RGBA(37,185,154,1)')];    // #25B99A RGBA(37,185,154,1)

//List Item Class
let listItem = function(obj){
  obj.dateID= (new Date().toString()),
  obj.creationDate= (new Date()).toLocaleDateString('en-US'),
  obj.completionDate= '',
  obj.deletionDate= ''
};

//Initial Todo Render
renderList(view); 

//Initial Theme Render
themeSwitch(themeIndex);

//Set Night Mode Status
setNightMode(nightMode);

//Menu Status
menuClickEvent(menuOpen);

//Command Mode (Debug Mode)
//Command Variable
let cmdMode = false;

//Sumbit Command
const sumbitCommand = (value)=>{
  let command = value.split(' ')
  let aurgument = command.slice(1,).join(' ');
  document.getElementById('item').value = ''; //Clear input bar
  //console.log(aurgument);
  switch(command[0]){
    case 'theme':
      themeSwitch(aurgument);
      break;
    case 'cmd':
      toggleCommandMode(JSON.parse(aurgument));
      break;
    case 'night':
      setNightMode(JSON.parse(aurgument));
      break;
    case 'unrender':
    case 'ur-':
      unRenderList();
      break;
    case 'render':
    case 'r-':
      renderList(aurgument);
      break;
    case 'clear':
    case 'c-':
      localStorage.clear();
      break;
    case 'view':
    case 'v-':
      console.log(view);
      break;
    case 'newItem':
    case 'ni-':
      submitItem(aurgument,true);
      break;
    default:
      console.log(`"${command[0]}" command not recognized`);
  }
}

//Set values if a user is signed in
(function profileTabUsername(){
  let profileTab = document.getElementById('profile');
  if(profileTab.innerText !== "Sign-In"){
    profileTab.setAttribute('data-date',' ');
    profileTab.setAttribute('href','/auth/logout');
  }else{
  profileTab.setAttribute('data-date','(Offline)');
  profileTab.setAttribute('href','/auth/google');
}})();

//Menu Event Listener
document.getElementById('Menu').addEventListener('click', ()=>{
  menuOpen = !menuOpen;
  menuClickEvent(menuOpen)});

function menuClickEvent(value){
  document.getElementById('itemBin').style.marginLeft = value === true ? '200px': '0';
  document.getElementById('sideMenu').style.transform = value === true ? 'translateX(0px)': 'translateX(-200px)';
  document.getElementById('itemBin').style.width = value === true ? 'calc(100% - 200px)': '100%';
  localStorage.setItem('menuOpen', JSON.stringify(value));
};


//Theme change click event
document.getElementById('theme').addEventListener('click', function(){
  themeIndex !== themes.length - 1 ? themeIndex ++ : themeIndex = 0; 
  //console.log(themeIndex);
  themeSwitch(themeIndex);
});

//Theme Switcher
function themeSwitch(index){
  let theme = themes[index];
  //console.log(`Theme: ${theme.name}`);
  document.getElementById('themeLabel').innerHTML =`Theme: ${theme.name}`;
  document.documentElement.style.setProperty('--mainAccent', theme.mainColor);
  localStorage.setItem('themeIndex', JSON.stringify(index));
};

//Night Mode toggle on click
document.getElementById('night').addEventListener('click', function(){
  nightMode = !nightMode;
  setNightMode(nightMode);
});

//Set Night Mode
function setNightMode(value){
  document.documentElement.style.setProperty('--backColor', value ? '#282828' : '#edf0f1');
  document.documentElement.style.setProperty('--itemColor', value ? '#454545' : '#fff');
  document.documentElement.style.setProperty('--containerTextColor', value ? '#aaa' : '#666');
  document.documentElement.style.setProperty('--menuHoverColor', value ? '#444' : '#aaa');
  document.documentElement.style.setProperty('--itemTextColor', value ? '#ddd' : '#444');
  document.documentElement.style.setProperty('--itemCompleteColor', value ? 'rgba(68,68,68,.3)' : 'rgba(255,255,255,.25)');
  document.getElementById('nightLabel').innerHTML =`Night Mode: ${nightMode ? 'ON' : 'OFF'}`;
  localStorage.setItem('nightMode', JSON.stringify(value));
}

//Task Button
document.getElementById('tasks').addEventListener('click', function(){
  renderList(viewings.TASKS);
});

//Delete Button
document.getElementById('deleted').addEventListener('click', function(){
  renderList(viewings.DELETED);
});

//Completed Button
document.getElementById('done').addEventListener('click', function(){
  renderList(viewings.DONE_TASKS);
});

//Focus on input on load
document.getElementById('item').focus();

//Add button pressed
document.getElementById('add').addEventListener('click', function(){
  let value = document.getElementById('item').value;
  //Get text in input field if any
  if(value){submitItem(value);}
});

//'Enter' press = submit
document.getElementById('item').addEventListener('keydown',function (e) {
  let value = document.getElementById('item').value;
  if (e.code === "Enter" && value) {submitItem(value);}
  });

//Toggle CommandMode
function toggleCommandMode(status) {
  status ? document.getElementById('themeLabel').innerHTML = `Theme: ${'cmd'}` : themeSwitch(themeIndex);
  status ? document.documentElement.style.setProperty('--mainAccent', '#000') : themeSwitch(themeIndex);
  document.getElementById('item').value = '';
}



//Submit item
function submitItem(value,override){
  //Command Mode Check
  switch(value){
    case "```":
      cmdMode = !cmdMode;
      toggleCommandMode(cmdMode); //toggle Command Mode
      break;
    default:
      if(cmdMode && !override){sumbitCommand(value);return;}else{
        //Normal Submit
        if(view !== viewings.TASKS){renderList(viewings.TASKS)}; //Switch to task list if not already before submit
        let newItem = {
          task: value
        };
        listItem(newItem);
        data.todo.push(newItem); //Push to data array
        addItemTodo(newItem,false,true);
        document.getElementById('item').value = ''; //Clear input bar
        dataObjectUpdate();
      }
  }
};

/////// RENDERING FUNCTIONS \\\\\\\

//List Renderer
function renderList(renderView){
  unRenderList(); //Unrender anything present if present
  view = renderView;
  console.log(`Currently viewing: ${view}`);
  switch (renderView){
    case viewings.TASKS:
    //Render uncomplete task
      
      if (!data.todo.length && !data.completed.length) return;
      for (let i = 0; i < data.todo.length; i++){
        let value = data.todo[i];
        addItemTodo(value, false);
      }
      //render complete task
      for (let i = 0; i < data.completed.length; i++){
        let value = data.completed[i];
        addItemTodo(value, true);
      }
      break;
    case viewings.DELETED:
      for (let i = 0; i < data.deleted.length; i++){
        let value = data.deleted[i];
        addItemTodo(value, false);
      }
      break;
    case viewings.DONE_TASKS:
      for (let i = 0; i < data.completed.length; i++){
        let value = data.completed[i];
        addItemTodo(value, true);
      }
      break;
    default: 
    console.log(`Viewing: ${renderView} resulted in a error`);
  }
};

//List Unrender
function unRenderList(){
  let items = document.querySelectorAll("li");
  if (items[0]){
    for (let i = 0; i < items.length; i++){
      items[i].parentNode.removeChild(items[i]);
    }
    console.log('Unrender done');
  };
};

/////// LOCAL STORAGE SAVING \\\\\\\

//Update Data
function dataObjectUpdate(){
  localStorage.setItem('todoList', JSON.stringify(data));
  console.log(data);
};

/////// POST REQUEST \\\\\\\\

function post(obj) {
  let form = document.createElement("form");
  form.setAttribute("method", 'post');
  form.setAttribute("enctype", 'multipart/form-data"');
  form.setAttribute("action", '/');

  //Create temp form with obj data
  for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
          let hiddenField = document.createElement("input");
          hiddenField.setAttribute("type", "text");
          hiddenField.setAttribute("name", key);
          hiddenField.setAttribute("value", obj[key]);

          form.appendChild(hiddenField);
      }
  }
  document.body.appendChild(form);  
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open('POST','http://127.0.0.1:7000/submit');
  xhr.send(formData);
  document.body.removeChild(form);
}

/////// ITEM MANIPULATION FUNCTIONS \\\\\\\

//Add todo item
function addItemTodo(obj, completed, submit){
  //Decide which list to add to
  let list = (completed) ? document.getElementById('completed') : document.getElementById('todo');
  //Create list elem and add text
  let item = document.createElement('li');
  item.innerText = obj.task;
  //Create a div for buttons
  let buttons = document.createElement('div');
  buttons.classList.add ('buttons');
  //Create remove button
  let remove = document.createElement('button');
  remove.classList.add ('remove');
  remove.innerHTML = removeSVG;
  //Add button event to remove button
  remove.addEventListener('click', removeItem);
  //Create complete button
  let complete = document.createElement('button');
  complete.classList.add ('complete');
  complete.innerHTML = completeSVG;
  //Add button event to complete button
  complete.addEventListener('click', completeItem);
  //Appends elems together
  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);

  //Assign className to item
  if (completed || view !== viewings.DELETED){
    completed ? item.className = "complete" : item.className = "uncomplete";
  } else {
    item.className = "deleted";
  }

  switch (item.className){
    case 'uncomplete':
    itemIndex = data.todo.indexOf(obj.task);
    item.setAttribute('data-date', obj.creationDate);
    item.setAttribute('title',`Made: ${obj.creationDate}`);
      break;
    case 'complete':
    itemIndex = data.completed.indexOf(obj.task);
    item.setAttribute('data-date', obj.completionDate);
    item.setAttribute('title',`Made: ${obj.creationDate}\nDone: ${obj.completionDate}`);
      break;
    case 'deleted':
    itemIndex = data.deleted.indexOf(obj.task);
    item.setAttribute('data-date', obj.deletionDate);
    item.setAttribute('title',`Deleted: ${obj.deletionDate}`);
      break;
  }
  if(submit){post(obj);};
}

//COMPLETE ITEM
function completeItem(){
  let completedItem = this.parentNode.parentNode;
  let listParent = completedItem.parentNode;
  let itemClass = completedItem.className;
  let itemValue = completedItem.innerText;
  let itemIndex;
  let itemPush;

  let targetList = (itemClass === 'uncomplete') ? document.getElementById('completed'):document.getElementById('todo'); //Not needed for myDay extention

  switch (itemClass){
    case 'uncomplete':
      //Find and temp clone index
      itemIndex = data.todo.findIndex((item => item.task === itemValue));
      itemPush = data.todo[itemIndex];
      itemPush.completionDate = (new Date()).toLocaleDateString('en-US');
      //Timestamp
      completedItem.setAttribute('title',`Made: ${itemPush.creationDate}\nDone: ${itemPush.completionDate}`);
      completedItem.setAttribute('data-date', itemPush.completionDate);
      //Data manipulation
      data.completed.push(itemPush);
      data.todo.splice(itemIndex,1);
      //DOM manipulation
      completedItem.className = "complete";
      listParent.removeChild(completedItem);
      targetList.insertBefore(completedItem, targetList.childNodes[0]);
      break;
    case 'complete':
      //Find and temp clone index
      itemIndex = data.completed.findIndex((item => item.task === itemValue));
      itemPush = data.completed[itemIndex];
      itemPush.completionDate = '';
      //Timestamp
      completedItem.setAttribute('title',`Made: ${itemPush.creationDate}`);
      //Data manipulation
      data.todo.push(itemPush);
      data.completed.splice(itemIndex,1);
      //DOM manipulation
      completedItem.className = "uncomplete";
      listParent.removeChild(completedItem);
      targetList.insertBefore(completedItem, targetList.childNodes[0]);
      break;
  }
  dataObjectUpdate();
}

//DELETE ITEM
function removeItem(){
  let deletingItem = this.parentNode.parentNode;
  deletingItem.parentNode.removeChild(deletingItem); //Remove from list it's in
  let itemClass = deletingItem.className;
  let itemValue = deletingItem.innerText; //Gets the text only, not list item
  let itemIndex;
  let itemPush;
  //Array Mutation and className change
  switch (itemClass){
    case 'uncomplete':
      //Find and temp store item object
      itemIndex = data.todo.findIndex((item => item.task === itemValue));
      itemPush = data.todo[itemIndex];
      itemPush.deletionDate = (new Date()).toLocaleDateString('en-US');
      //Set class and transfer data
      itemClass = 'deleted';
      data.todo.splice(itemIndex,1);
      data.deleted.push(itemPush)
      break;
    case 'complete':
      //Find and temp store item object
      itemIndex = data.completed.findIndex((item => item.task === itemValue));
      itemPush = data.completed[itemIndex];
      itemPush.deletionDate = (new Date()).toLocaleDateString('en-US');
      //Set class and transfer data
      itemClass = 'deleted';
      data.completed.splice(itemIndex,1);
      data.deleted.push(itemPush)
      break;
    case 'deleted':
      //Find and delete item
      itemIndex = data.deleted.findIndex((item => item.task === itemValue));
      data.deleted.splice(itemIndex,1);
      break;
  }
  dataObjectUpdate();
}