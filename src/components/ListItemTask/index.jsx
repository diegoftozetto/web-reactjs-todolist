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
        <img onClick={() => handlerEdit(task.index)} src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" alt=""/>
        <img onClick={() => handlerRemove(task.index)} src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png" alt=""/>
      </div>
    </div>
  );
};
