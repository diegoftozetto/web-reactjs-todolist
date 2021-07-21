import { useSelector } from "react-redux";
import { selectors } from "../../selectors/listItem";
import { ListItemTask } from "../ListItemTask";
import { Title } from "../../components/Title";
import "./styles.css";

export const ListTask = () => {
  const allTasks = useSelector(selectors.getAllTasks);

  return (
    <div className="listtask-flex-container">
      <Title
        name="Lista de Tarefas"
        subName="Aqui você pode visualizas suas tarefas..."
      />
      <div className="all-tasks">
        {allTasks.length === 0 && (
          <h5 className="no-tasks">Nenhuma tarefa cadastrada =(</h5>
        )}
        {allTasks.map((task, index) => (
          <ListItemTask key={index} task={{ id: index, ...task }} />
        ))}
      </div>
    </div>
  );
};
