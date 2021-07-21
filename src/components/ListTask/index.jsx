import { useSelector } from 'react-redux';
import { selectors } from '../../selectors/listItem';
import { ListItemTask } from '../ListItemTask';
import './styles.css';

export const ListTask = () => {
  const allTasks = useSelector(selectors.getAllTasks);

  return (
    <div className="listtask-container">
      {allTasks.length === 0 && <h5 className="no-tasks">Nenhuma tarefa cadastrada =(</h5>}

      <div className="listtask-flex-container">
        {allTasks.map((task, index) => (
          <ListItemTask key={index} task={{index, ...task}}/>
        ))}
      </div>
    </div>
  )
}
