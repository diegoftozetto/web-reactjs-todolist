import { FormTask } from "../../components/FormTask";
import { ListTask } from "../../components/ListTask";
import { Title } from "../../components/Title";
import "./styles.css";

export const Home = () => {
  return (
    <>
      <div className="container">
        <Title
          name="Nova Tarefa"
          subName="Aqui você pode criar uma nova tarefa..."
        />
        <FormTask />
        <hr />
        <Title
          name="Lista de Tarefas"
          subName="Aqui você pode visualizas suas tarefas..."
        />
        <ListTask />
      </div>
    </>
  );
};
