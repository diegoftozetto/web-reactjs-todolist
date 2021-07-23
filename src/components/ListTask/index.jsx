import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../selectors/listItem';
import { ListItemTask } from '../ListItemTask';
import { Title } from '../../components/Title';
import './styles.css';
import { useEffect } from 'react';
import { actions } from '../../actions/listItem';

export const ListTask = () => {
  const allTasks = useSelector(selectors.getAllTasks);
  const loading = useSelector(selectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadTasks());
  }, [dispatch]);

  return (
    <div className="listtask-flex-container">
      <Title name="Lista de Tarefas" subName="Aqui você pode visualizas suas tarefas..." />
      <div className="listtask-alltasks">
        {loading && <h5 className="listtask-box">Carregando...</h5>}
        {(!loading && allTasks.length) === 0 && <h5 className="listtask-box">Nenhuma tarefa cadastrada =(</h5>}
        {allTasks.map((task) => (
          <ListItemTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
