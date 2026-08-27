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

const renderTodo = () => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';

  todoList.map((todo, index) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const removeBtn = document.createElement('button');

    input.type = 'checkbox';
    input.id = index + 1;
    input.checked = todo.completed;

    label.htmlFor = index + 1;
    label.textContent = todo.task;

    removeBtn.textContent = 'X';

    removeBtn.addEventListener('click', () => {
      todoList.splice(index, 1);
      ul.removeChild(li);
      console.log(todoList);
    });

    input.addEventListener('change', () => {
      todo.completed = input.checked;
      console.log(todoList);
    });

    li.append(input, label, removeBtn);

    ul.appendChild(li);
  });
};

const openBtn = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
openBtn.addEventListener('click', () => {
  dialog.showModal();
});

const addNewTask = document.querySelector('form button[type="submit"]');
const newTaksInput = document.querySelector('form input');

addNewTask.addEventListener('click', e => {
  e.preventDefault();
  todoList.push({
    id: todoList.length + 1,
    task: newTaksInput.value,
    completed: false,
  });
  renderTodo();
  newTaksInput.value = '';
  dialog.close();
  console.log(todoList);
});

renderTodo();
