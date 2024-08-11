import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Data from './dateRender';
import { saveToLs, loadFromLs } from './localStorage';
import { sortTodosByPriority, createTodoMarkup } from './todoMarkup';
import { getBgImg, getTimeOfDay, updateBackground } from './BgImg';
import { getNewQuote } from './getNewQuote';
import { startEditing, cancelEditing, saveEditing } from './editing';

const refs = {
  form: document.querySelector('.js-form'),
  todoList: document.querySelector('.todos-list'),
  select: document.querySelector('.todos-select'),
};

let todos = loadFromLs('todos') || [];

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const todosName = e.currentTarget.elements.todos.value.trim();
  const todosPriority = e.currentTarget.elements.select.value;

  if (!todosName || !todosPriority) {
    return iziToast.error({
      title: 'Error',
      message: 'Please enter both a task and a priority',
      position: 'bottomRight',
    });
  }

  if (todos.some(todo => todo.text === todosName)) {
    return iziToast.warning({
      title: 'Warning',
      message: 'You already have such a task',
      position: 'bottomRight',
    });
  }

  const todo = {
    id: Date.now(),
    text: todosName,
    priority: todosPriority,
  };
  todos.push(todo);
  todos = sortTodosByPriority(todos);
  saveToLs('todos', todos);

  refs.todoList.innerHTML = todos.map(createTodoMarkup).join('');
  refs.todoList.scrollTop = refs.todoList.scrollHeight;
  e.currentTarget.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  if (todos.length) {
    todos = sortTodosByPriority(todos);
    refs.todoList.innerHTML = todos.map(createTodoMarkup).join('');
  }
});

refs.todoList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const todoId = Number(e.target.dataset.id);

  if (e.target.id === 'delete') {
    todos = todos.filter(item => item.id !== todoId);
    saveToLs('todos', todos);
    e.target.closest('.todos-item').remove();
  }

  if (e.target.id === 'done') {
    const todoItem = e.target.closest('.todos-item');
    todoItem.querySelector('.todos-text').style.textDecoration = 'line-through';
  }

  if (e.target.id === 'edit') {
    const todoItem = e.target.closest('.todos-item');
    startEditing(todoId, todoItem, todos, refs);
  }
});

window.addEventListener('load', updateBackground);
setInterval(updateBackground, 3600000);
getNewQuote();
