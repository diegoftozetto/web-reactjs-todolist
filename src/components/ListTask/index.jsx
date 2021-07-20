import { ListItemTask } from '../ListItemTask';
import './styles.css';

export const ListTask = ({ allTasks }) => {
  return (
    <div className="listtask-container">
      {allTasks.length === 0 && <h5 className="no-tasks">Nenhuma tarefa cadastrada =(</h5>}

      <div className="listtask-flex-container">
        {allTasks.map((task, index) => (
          <ListItemTask key={index} task={task}/>
        ))}
      </div>
    </div>
  )
}
