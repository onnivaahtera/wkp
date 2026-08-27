// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

todoList.map((todo, index) => {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');

  const completed = todo.completed ? 'checked' : '';

  input.type = 'checkbox';
  input.id = index + 1;
  input.checked = completed;

  label.htmlFor = index + 1;
  label.textContent = todo.task;

  li.append(input, label);

  ul.appendChild(li);
});
