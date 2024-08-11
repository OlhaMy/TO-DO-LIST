import { sortTodosByPriority, createTodoMarkup } from './todoMarkup';
import { saveToLs } from './localStorage';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function startEditing(todoId, todoItem, todos, refs) {
  const currentTodo = todos.find(todo => todo.id === todoId);

  const editForm = `
      <input type="text" class="edit-input" value="${currentTodo.text}" />
      <select class="edit-select">
        <option value="low" ${
          currentTodo.priority === 'low' ? 'selected' : ''
        }>Low</option>
        <option value="medium" ${
          currentTodo.priority === 'medium' ? 'selected' : ''
        }>Medium</option>
        <option value="high" ${
          currentTodo.priority === 'high' ? 'selected' : ''
        }>High</option>
      </select>
      <button id="save" data-id="${todoId}">Save</button>
      <button id="cancel" data-id="${todoId}">Cancel</button>
    `;

  todoItem.innerHTML = editForm;

  document
    .querySelector(`#save[data-id="${todoId}"]`)
    .addEventListener('click', () => saveEditing(todoId, todos, refs));
  document
    .querySelector(`#cancel[data-id="${todoId}"]`)
    .addEventListener('click', () => cancelEditing(todos, refs));
}

export function saveEditing(todoId, todos, refs) {
  const editInput = document.querySelector(`.edit-input`);
  const editSelect = document.querySelector(`.edit-select`);

  const updatedText = editInput.value.trim();
  const updatedPriority = editSelect.value;

  if (!updatedText) {
    return iziToast.error({
      title: 'Error',
      message: 'Task name cannot be empty',
      position: 'bottomRight',
    });
  }

  const todoIndex = todos.findIndex(todo => todo.id === todoId);
  todos[todoIndex].text = updatedText;
  todos[todoIndex].priority = updatedPriority;

  todos = sortTodosByPriority(todos);
  saveToLs('todos', todos);
  renderTodos(todos, refs);
}

export function cancelEditing(todos, refs) {
  renderTodos(todos, refs);
}

function renderTodos(todos, refs) {
  refs.todoList.innerHTML = todos.map(createTodoMarkup).join('');
}
