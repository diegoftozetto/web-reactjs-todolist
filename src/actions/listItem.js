import { actionTypes } from "../constants/listItem";

export const actions = {
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

  update: (id, task) => ({
    type: actionTypes.UPDATE,
    id,
    payload: task,
  }),

  remove: (id) => ({
    type: actionTypes.REMOVE,
    payload: id,
  }),
};
