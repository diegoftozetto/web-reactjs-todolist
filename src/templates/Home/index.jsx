import { FormTask } from '../../components/FormTask';
import { ListTask } from '../../components/ListTask';
import './styles.css';

export const Home = () => {
  return (
    <div className="container">
      <FormTask />
      <hr />
      <ListTask />
    </div>
  );
};
