import { actions } from '../actions/listItem';
import { apis as listItemApis } from '../apis/listItem';

export const thunks = {
  loadTasks: () => (dispatch) => {
    dispatch(actions.fetchLoading());

    listItemApis
      .loadTasks()
      .then((tasks) => {
        dispatch(actions.loadTasks(tasks));
      })
      .catch(() => {
        dispatch(actions.fetchError());
      });
  },
  add: () => (dispatch) => {
    dispatch(actions.fetchLoading());

    listItemApis
      .then((task) => {
        dispatch(actions.add(task));
      })
      .catch(() => {
        dispatch(actions.fetchError());
      });
  },
  update: () => (dispatch) => {
    dispatch(actions.fetchLoading());

    listItemApis
      .then((task) => {
        dispatch(actions.update(task));
      })
      .catch(() => {
        dispatch(actions.fetchError(0));
      });
  },
  remove: (id) => (dispatch) => {
    dispatch(actions.fetchLoading());

    fetch(`https://my-json-server.typicode.com/diegoftozetto/api-reactjs-todolist/tasks/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => {
        dispatch(actions.remove(id));
      })
      .catch(() => {
        dispatch(actions.fetchError());
      });
  },
};
