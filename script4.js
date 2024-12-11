
const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


function addTask() {
  const taskText = todoInput.value.trim();
  
  if (taskText === '') return; 

  const li = document.createElement('li');
  li.classList.add('todo-item');
  
  
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  li.appendChild(taskContent);
  
  
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', markAsCompleted);
  li.appendChild(completeButton);

  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteTask);
  li.appendChild(deleteButton);

  
  todoList.appendChild(li);

  
  todoInput.value = '';
}


function markAsCompleted(event) {
  const task = event.target.parentElement;
  task.classList.toggle('completed');
}


function deleteTask(event) {
  const task = event.target.parentElement;
  task.remove();
}


addButton.addEventListener('click', addTask);


todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});