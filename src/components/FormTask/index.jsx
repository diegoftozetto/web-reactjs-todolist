import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../actions/listItem";
import "./styles.css";

export const FormTask = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handlerChangeName = (e) => {
    setName(e.target.value);
  };

  const handlerChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const { name, description } = e.target;

    const task = {
      name: name.value,
      description: description.value,
    };

    setName("");
    setDescription("");

    dispatch(actions.add(task));
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className="inputtask-flex-container">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Informe a tarefa..."
            onChange={handlerChangeName}
            value={name}
          />
          <textarea
            name="description"
            id="description"
            placeholder="Informe a descrição da tarefa..."
            cols="30"
            rows="5"
            onChange={handlerChangeDescription}
            value={description}
          />
          <button type="submit">Adicionar Tarefa</button>
        </div>
      </form>
    </>
  );
};
