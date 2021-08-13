import { actionTypes } from '../constants/listItem';

export const actions = {
  fetchLoading: () => ({
    type: actionTypes.FETCH_LOADING,
  }),

  fetchError: () => ({
    type: actionTypes.FETCH_ERROR,
  }),

  loadTasks: (tasks) => ({
    type: actionTypes.LOAD_TASKS,
    payload: tasks,
  }),

  add: (task) => ({
    type: actionTypes.ADD,
    payload: task,
  }),

  edit: (task) => ({
    type: actionTypes.EDIT,
    payload: task,
  }),

  cancelEdit: () => ({
    type: actionTypes.CANCEL_EDIT,
  }),

  update: (task) => ({
    type: actionTypes.UPDATE,
    payload: task,
  }),

  remove: (id) => ({
    type: actionTypes.REMOVE,
    payload: id,
  }),
};
