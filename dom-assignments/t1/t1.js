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
  const checked = todo.completed ? 'checked' : '';

  document.querySelector('ul').insertAdjacentHTML(
    'beforeend',
    `<li>
        <input type="checkbox" id="todo-${index + 1}" ${checked}/>
        <label for="todo-${index + 1}">${todo.task}</label>
    </li>`
  );
});
