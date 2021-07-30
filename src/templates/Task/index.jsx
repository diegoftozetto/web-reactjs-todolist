import { FormTask } from '../../components/FormTask';
import { ListTask } from '../../components/ListTask';
import * as Styled from './styles.js';

export const Task = () => {
  return (
    <>
      <FormTask />
      <Styled.Hr />
      <ListTask />
    </>
  );
};
