export const selectors = {
  getAllTasks: (state) => state.ListItemReducers.allTasks,
  getLoading: (state) => state.ListItemReducers.loading,
  getTaskEdit: (state) => state.ListItemReducers.taskEdit,
};
