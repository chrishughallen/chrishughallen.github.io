const input = document.getElementById("todo-input")
const addButton = document.getElementById("add-btn")
const toDoListUl = document.getElementById("todo-list")
const toDoListStatus = document.getElementById("todo-list-status")
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

// returns a span element with text of the toDo
function toDoSpan(toDo) {
  let span = document.createElement('span')
  span.innerHTML = `${toDo.item}`
  return span
}

// returns a checkbox element to toggle the completed status
function toDoCheckbox(toDo) {
  let checkbox = document.createElement("input")
  checkbox.setAttribute("type", "checkbox")
  checkbox.addEventListener('click', toggleToDo)
  if(toDo.completed) {
    checkbox.setAttribute('checked', true)
  }
  return checkbox
}

// returns the parent LI element for a toDo
function toDoLi(toDo) {
  let li = document.createElement('li')
  if(toDo.completed) {
    li.classList.add("completed")
  }
  return li
}

// returns a delete button 
function deleteButton() {
  let deleteButton = document.createElement('button')
  let trashIcon = document.createElement('i')
  trashIcon.classList.add("fa")
  trashIcon.classList.add("fa-solid")
  trashIcon.classList.add("fa-trash")
  deleteButton.addEventListener("click", removeToDo)
  deleteButton.appendChild(trashIcon)
  // deleteButton.innerHTML = "X"
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
  let checkbox = toDoCheckbox(toDo)
  let deleteBtn = deleteButton()
  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(deleteBtn)
  toDoListUl.appendChild(li)
}

// renders a lsit of LI elements to the page based on local storage toDo List
function renderToDoList(list) {
  toDoListUl.innerHTML = ""
  if(toDos.length == 0) {
    updateToDoListStatus([])
    return
  }
  list.forEach((todo) => {
    createElement(todo)
  })

  updateToDoListStatus(list)
}

function updateToDoListStatus(list) {
  if(list.length == 0) {
    toDoListStatus.innerHTML = "All caught up"
  } else {
    let completed = list.filter((todo) => todo.completed)
    toDoListStatus.innerHTML = `${completed.length} / ${list.length}`
  }
}

// ***** UPDATE / DELETE *****

// toggle the completed status of a toDo
function toggleToDo(e) {
  let task = e.target.nextElementSibling.innerHTML
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
