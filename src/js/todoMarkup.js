export function sortTodosByPriority(todos) {
  const priorityOrder = { high: 3, medium: 2, low: 1 };
  return todos.sort(
    (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
  );
}

export function createBgColor(priority) {
  switch (priority) {
    case 'high':
      return '#F08080';
    case 'medium':
      return '#FFFACD';
    case 'low':
      return '#D3D3D3';
    default:
      return '#fff';
  }
}

export function createTodoMarkup({ text, priority, id }) {
  const bgColor = createBgColor(priority);

  return `
      <li class="todos-item" style="background-color: ${bgColor}">
        <span class="todos-text">${text}</span>
        <span class="todos-info">${priority}</span>
        <div class="btn-wrapper">
          <button id="edit" class="edit" data-id="${id}" type="button">&#9998;</button>
          <button id="done" class="done" data-id="${id}" type="button">&#10003;</button>
          <button id="delete" class="delete" data-id="${id}" type="button">&#10007;</button>
        </div>
      </li>`;
}
