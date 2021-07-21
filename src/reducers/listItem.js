import { actionTypes } from "../constants/listItem";

const INITIAL_STATE = {
  allTasks: []
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, allTasks: [...state.allTasks, action.payload] };
    case actionTypes.EDIT:
      return { ...state };
    case actionTypes.REMOVE:
      return { allTasks: [...state.allTasks.filter((task, index) => index !== action.payload)] };
    default:
      return { ...state };
  }
};
