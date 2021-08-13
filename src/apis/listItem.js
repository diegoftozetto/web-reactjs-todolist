export const listItemApis = {
  loadTasks: () =>
    fetch('https://my-json-server.typicode.com/diegoftozetto/api-reactjs-todolist/tasks').then((r) => r.json()),
  add: (task) =>
    fetch('https://my-json-server.typicode.com/diegoftozetto/api-reactjs-todolist/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((r) => r.json()),
  update: (task) =>
    fetch(`https://my-json-server.typicode.com/diegoftozetto/api-reactjs-todolist/tasks/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((r) => r.json()),
};
