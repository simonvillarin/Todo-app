//Selectors
const editOverlay = document.getElementById('edit-overlay');
const deleteOverlay = document.getElementById('delete-overlay');
const btnSubmit = document.getElementById('submit');
const btnCancel = document.getElementById('cancel');
const btnNo = document.getElementById('no');
const btnYes = document.getElementById('yes');

let todos = [];
let _index;

//Get todos from localStorage and render cards
window.addEventListener('load', () => {
  getTodos();
  mapTodos();
});

//Get todos from localStorage
const getTodos = () => {
  const getTodo = localStorage.getItem('todos');
  if (getTodo) {
    const localTodos = JSON.parse(getTodo);
    todos = localTodos;
  }
};

//Map todos into cards
const mapTodos = () => {
  const todoList = document.querySelector('.todo-list');

  todoList.innerHTML = '';

  todos.map((todo, index) => {
    todoList.innerHTML += `
    <div class="card">
    <div class="card-btn">
      <div id="edit" onclick="editTodo(${index})">
        <i class="ri-pencil-line"></i>
      </div>
      <div id="delete" onclick="deleteTodo(${index})">
        <i class="ri-delete-bin-line"></i>
      </div>
    </div>
    <div class="card-logo">
      <i class="ri-todo-line" id="todo-logo"></i>
    </div>
    <h2 class="card-title">${todo.title}</h2>
    <p class="card-body">${todo.body}
    </p>
    <div class="card-date">${todo.date}</div>
  </div>
    `;
  });
};

//Edit button
const editTodo = (index) => {
  const title = document.getElementById('title');
  const body = document.getElementById('body');
  const date = document.getElementById('date');

  editOverlay.style.display = 'flex';

  title.value = todos[index].title;
  body.value = todos[index].body;
  date.value = todos[index].date;

  _index = index;
};

//Edit - Cancel button
btnCancel.addEventListener('click', () => {
  editOverlay.style.display = 'none';
});

//Edit - Submit button
btnSubmit.addEventListener('click', () => {
  console.log(_index);

  let todo = { title: title.value, body: body.value, date: date.value };
  todos.splice(_index, 1, todo);

  mapTodos();
  localStorage.setItem('todos', JSON.stringify(todos));

  editOverlay.style.display = 'none';
});

//Delete button
const deleteTodo = (index) => {
  _index = index;
  deleteOverlay.style.display = 'flex';
};

//Delete - No button
btnNo.addEventListener('click', () => {
  deleteOverlay.style.display = 'none';
});

//Delete - Yes button
btnYes.addEventListener('click', () => {
  todos.splice(_index, 1);
  mapTodos();
  localStorage.setItem('todos', JSON.stringify(todos));

  deleteOverlay.style.display = 'none';
});
