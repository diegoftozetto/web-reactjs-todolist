import { actionTypes } from '../constants/listItem';

const INITIAL_STATE = {
  allTasks: [],
  loading: false,
  taskEdit: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LOADING:
      return { ...state, loading: true, taskEdit: null };
    case actionTypes.FETCH_ERROR:
      return { ...state, loading: false, taskEdit: null };
    case actionTypes.LOAD_TASKS:
      return { ...state, loading: false, allTasks: action.payload, taskEdit: null };
    case actionTypes.ADD:
      return {
        ...state,
        allTasks: [...state.allTasks, action.payload],
        loading: false,
        taskEdit: null,
      };
    case actionTypes.EDIT:
      return { ...state, loading: false, taskEdit: action.payload };
    case actionTypes.CANCEL_EDIT:
      return { ...state, loading: false, taskEdit: null };
    case actionTypes.UPDATE:
      return {
        ...state,
        loading: false,
        allTasks: state.allTasks.map((task) => {
          if (task.id === action.payload.id) {
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
        allTasks: [...state.allTasks.filter((task) => task.id !== action.payload)],
        loading: false,
        taskEdit: null,
      };
    default:
      return { ...state };
  }
};
