import "./styles.css";

export const ListItemTask = ({ task }) => {
  return (
    <div className="listitemtask-container">
      <div className="content">
        <h5>{task.name}</h5>
        <p>{task.description}</p>
      </div>
      <div className="options">
        <a href="">Editar</a>
        <a href="">Remover</a>
      </div>
    </div>
  );
};
