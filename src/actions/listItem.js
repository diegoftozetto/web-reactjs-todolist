import { actionTypes } from '../constants/listItem';

export const actions = {
  loadTasks: () => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.FETCH_LOADING,
      });

      fetch('https://my-json-server.typicode.com/diegoftozetto/api-reactjs-todolist/tasks')
        .then((r) => r.json())
        .then((tasks) => {
          dispatch({ type: actionTypes.LOAD_TASKS, payload: tasks });
        })
        .catch(() => {
          dispatch({ type: actionTypes.FETCH_ERROR });
        });
    };
  },

  add: (task) => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.FETCH_LOADING,
      });

      fetch('https://my-json-server.typicode.com/diegoftozetto/api-reactjs-todolist/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
        .then((r) => r.json())
        .then((task) => {
          dispatch({
            type: actionTypes.ADD,
            payload: task,
          });
        })
        .catch(() => {
          dispatch({ type: actionTypes.FETCH_ERROR });
        });
    };
  },

  edit: (task) => ({
    type: actionTypes.EDIT,
    payload: task,
  }),

  cancelEdit: () => ({
    type: actionTypes.CANCEL_EDIT,
  }),

  update: (task) => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.FETCH_LOADING,
      });

      fetch(`https://my-json-server.typicode.com/diegoftozetto/api-reactjs-todolist/tasks/${task.id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
        .then((r) => r.json())
        .then((task) => {
          dispatch({
            type: actionTypes.UPDATE,
            payload: task,
          });
        })
        .catch(() => {
          dispatch({ type: actionTypes.FETCH_ERROR });
        });
    };
  },

  remove: (id) => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.FETCH_LOADING,
      });

      fetch(`https://my-json-server.typicode.com/diegoftozetto/api-reactjs-todolist/tasks/${id}`, {
        method: 'DELETE',
      })
        .then((r) => r.json())
        .then(() => {
          dispatch({
            type: actionTypes.REMOVE,
            payload: id,
          });
        })
        .catch(() => {
          dispatch({ type: actionTypes.FETCH_ERROR });
        });
    };
  },
};
