const input = document.getElementById("todo-input")
const addButton = document.getElementById("add-btn")
const toDoListUl = document.getElementById("todo-list")
addButton.addEventListener("click", handleInput)
let toDos

// check if there is already some toDos in localStorage
if(localStorage.getItem('todos')) {
  toDos = Array.from(JSON.parse(localStorage.getItem('todos')))
} else {
  toDos = []
}

// decidee what to do with users input
function handleInput() {
  if(!input.value) {
    alert("You can't add an empty todo item!")
    return
  }
  else if(checkTaskDoesntExist(toDos, input.value)) {
    alert("That item is already on your todo list!")
    return
  } 
  else {
    addNewToDo(input.value)
  }
}

function addNewToDo(toDo) {
  toDos.push({item: toDo, completed: false})
  input.value = ""
  updateLocalStorage(toDos)
}

// ***** HELPER FUNCTIONS *****

// ensures new task isn't already in toDo list
function checkTaskDoesntExist(list, task) {
  return list.filter(toDo => toDo.item == task).length >= 1
}

// returns a clickable span element with text of the toDo
function toDoSpan(toDo) {
  let span = document.createElement('span')
  span.innerHTML = `${toDo.item}`
  span.addEventListener("click", toggleToDo)
  return span
}

// returns the parent LI element for a toDo
function toDoLi(toDo) {
  let li = document.createElement('li')
  li.setAttribute("todo-index", toDo.index)
  if(toDo.completed) {
    li.classList.add("completed")
  }
  return li
}

// returns a delete button 
function deleteButton() {
  let deleteButton = document.createElement('button')
  deleteButton.addEventListener("click", removeToDo)
  deleteButton.innerHTML = "X"
  return deleteButton
}

// ***** LOCAL STORAGE *****

// sets localStorage variable to the value of toDos array
function updateLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(toDos))
  renderToDoList(toDos)
}

// ***** UI RENDERING *****

// renders a new LI with the correct span and delete button for toDo
function createElement(toDo) {
  let li = toDoLi(toDo)
  let span = toDoSpan(toDo)
  let deleteBtn = deleteButton()
  li.appendChild(span)
  li.appendChild(deleteBtn)
  toDoListUl.appendChild(li)
}

// renders a lsit of LI elements to the page based on local storage toDo List
function renderToDoList(list) {
  toDoListUl.innerHTML = ""
  if(toDos.length == 0) {
    return
  }
  list.forEach((todo) => {
    createElement(todo)
  })
}

// ***** UPDATE / DELETE *****

// toggle the completed status of a toDo
function toggleToDo(e) {
  let task = e.currentTarget.innerHTML
  toDos.forEach(toDo => {
    if(task == toDo.item) {
      toDo.completed = !toDo.completed
    }
  })
  updateLocalStorage(toDos)
}

// removes a toDo
function removeToDo(e) {
  let task = e.currentTarget.previousElementSibling.innerHTML
  toDos = toDos.filter(toDo => toDo.item != task)
  updateLocalStorage(toDos)
}

renderToDoList(toDos)
