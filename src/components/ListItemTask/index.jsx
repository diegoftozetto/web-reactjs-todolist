import { useDispatch } from "react-redux";
import { actions } from "../../actions/listItem";
import "./styles.css";

export const ListItemTask = ({ task }) => {
  const dispatch = useDispatch();

  const handlerEdit = (index) => {
    //dispatch(actions.edit(index));
  }

  const handlerRemove = (index) => {
    dispatch(actions.remove(index));
  }

  return (
    <div className="listitemtask-container">
      <div className="content">
        <h5>{task.name}</h5>
        <p>{task.description}</p>
      </div>
      <div className="options">
        <a href="" onClick={() => handlerEdit(task.index)}>Editar</a>
        <a href="" onClick={() => handlerRemove(task.index)}>Remover</a>
      </div>
    </div>
  );
};
