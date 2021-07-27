import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../selectors/listItem';
import { ListItemTask } from '../ListItemTask';
import { Title } from '../../components/Title';
import { useEffect } from 'react';
import { actions } from '../../actions/listItem';
import * as Styled from './styles';

export const ListTask = () => {
  const allTasks = useSelector(selectors.getAllTasks);
  const loading = useSelector(selectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadTasks());
  }, [dispatch]);

  return (
    <Styled.FlexContainer>
      <Title name="Lista de Tarefas" subName="Aqui você pode visualizas suas tarefas..." />
      <Styled.AllTasks>
        {loading && (
          <Styled.Box>
            <h5>Carregando....</h5>
          </Styled.Box>
        )}
        {(!loading && allTasks.length) === 0 && (
          <Styled.Box>
            <h5>Nenhuma tarefa cadastrada</h5>
          </Styled.Box>
        )}
        {allTasks.map((task) => (
          <ListItemTask key={task.id} task={task} />
        ))}
      </Styled.AllTasks>
    </Styled.FlexContainer>
  );
};
