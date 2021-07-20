import { useState } from "react";
import "./styles.css";

export const FormTask = ({ formSubmitHandler }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handlerChangeName = (e) => {
    setName(e.target.value);
  };

  const handlerChangeDescription = (e) => {
    setDescription(e.target.value);
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
