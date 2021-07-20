import { useState } from "react";
import { FormTask } from "../../components/FormTask";
import { ListTask } from "../../components/ListTask";
import { Title } from "../../components/Title";
import "./styles.css";

export const Home = () => {
  const [allTasks, setAllTasks] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const { name, description } = e.target;

    allTasks.push({
      name: name.value,
      description: description.value,
    });
    setAllTasks([...allTasks], allTasks);
  };

  return (
    <>
      <div className="container">
        <Title
          name="Nova Tarefa"
          subName="Aqui você pode criar uma nova tarefa..."
        />
        <FormTask formSubmitHandler={formSubmitHandler} />
        <hr />
        <Title
          name="Lista de Tarefas"
          subName="Aqui você pode visualizas suas tarefas..."
        />
        <ListTask allTasks={allTasks} />
      </div>
    </>
  );
};
