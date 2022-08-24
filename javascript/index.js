const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let todos = [];

  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const date = document.getElementById('date').value;
  const alertMessage = document.getElementById('alert');

  const getTodos = localStorage.getItem('todos');

  if (getTodos) {
    const localTodos = JSON.parse(getTodos);
    todos = localTodos;
  }
  let todo = {
    title: title,
    body: body,
    date: date,
  };

  todos.unshift(todo);
  localStorage.setItem('todos', JSON.stringify(todos));

  form.reset();

  alertMessage.style.display = 'block';
  setTimeout(() => {
    alertMessage.style.display = 'none';
  }, 3000);
});
