import { actionTypes } from "../constants/listItem";

export const actions = {
  loadTasks: () => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.FETCH_LOADING,
      });

      fetch("http://localhost:8000/tasks")
        .then((r) => r.json())
        .then((tasks) => {
          dispatch({ type: actionTypes.LOAD_TASKS, payload: tasks });
        })
        .catch((err) => {
          dispatch({ type: actionTypes.FETCH_ERROR });
        });
    };
  },

  add: (task) => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.FETCH_LOADING,
      });

      fetch("http://localhost:8000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((r) => r.json())
        .then((task) => {
          dispatch({
            type: actionTypes.ADD,
            payload: task,
          });
        })
        .catch((err) => {
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

      fetch(`http://localhost:8000/tasks/${task.id}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((r) => r.json())
        .then((task) => {
          dispatch({
            type: actionTypes.UPDATE,
            payload: task,
          });
        })
        .catch((err) => {
          dispatch({ type: actionTypes.FETCH_ERROR });
        });
    };
  },

  remove: (id) => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.FETCH_LOADING,
      });

      fetch(`http://localhost:8000/tasks/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => {
          dispatch({
            type: actionTypes.REMOVE,
            payload: id,
          });
        })
        .catch((err) => {
          dispatch({ type: actionTypes.FETCH_ERROR });
        });
    };
  },
};
