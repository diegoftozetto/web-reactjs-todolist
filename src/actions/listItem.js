import { actionTypes } from "../constants/listItem"

export const actions = {
  add: (task) => ({
    type: actionTypes.ADD,
    payload: task
  }),

  edit: (index) => ({
    type: actionTypes.EDIT,
    payload: index
  }),

  remove: (index) => ({
    type: actionTypes.REMOVE,
    payload: index
  })
}
