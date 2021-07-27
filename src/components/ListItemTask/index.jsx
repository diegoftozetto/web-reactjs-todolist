import P from 'prop-types';
import { useDispatch } from 'react-redux';
import { actions } from '../../actions/listItem';
import * as Styled from './styles';

export const ListItemTask = ({ task }) => {
  const dispatch = useDispatch();

  const handlerEdit = (task) => {
    dispatch(actions.edit(task));
  };

  const handlerRemove = (id) => {
    dispatch(actions.remove(id));
  };

  return (
    <Styled.Grid>
      <Styled.Content>
        <h5>{task.name}</h5>
        <p>{task.description}</p>
      </Styled.Content>
      <Styled.Options>
        <img
          onClick={() => handlerEdit(task)}
          src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"
          alt=""
        />
        <img
          onClick={() => handlerRemove(task.id)}
          src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png"
          alt=""
        />
      </Styled.Options>
    </Styled.Grid>
  );
};

ListItemTask.propTypes = {
  task: P.object.isRequired,
};
