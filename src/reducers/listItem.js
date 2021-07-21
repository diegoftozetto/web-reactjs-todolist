import { actionTypes } from "../constants/listItem";

const INITIAL_STATE = {
  allTasks: [],
  taskEdit: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        allTasks: [...state.allTasks, action.payload],
        taskEdit: null,
      };
    case actionTypes.EDIT:
      return { ...state, taskEdit: action.payload };
    case actionTypes.CANCEL_EDIT:
      return { ...state, taskEdit: null };
    case actionTypes.UPDATE:
      return {
        ...state,
        allTasks: state.allTasks.map((task, index) => {
          if (index === action.id) {
            return {
              ...task,
              name: action.payload.name,
              description: action.payload.description,
            };
          } else return task;
        }),
        taskEdit: null,
      };
    case actionTypes.REMOVE:
      return {
        allTasks: [
          ...state.allTasks.filter((task, index) => index !== action.payload),
        ],
        taskEdit: null,
      };
    default:
      return { ...state };
  }
};
