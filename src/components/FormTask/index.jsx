import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../../selectors/listItem';
import { actions } from '../../actions/listItem';
import { Title } from '../../components/Title';
import * as Styled from './styles';

export const FormTask = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const taskEdit = useSelector(selectors.getTaskEdit);
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskEdit) {
      const { name, description } = taskEdit;
      setName(name);
      setDescription(description);
    }
  }, [taskEdit]);

  const handlerChangeName = (e) => {
    setName(e.target.value);
  };

  const handlerChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const clearForm = () => {
    setName('');
    setDescription('');
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const { name, description } = e.target;

    var task = {
      name: name.value,
      description: description.value,
    };
    clearForm();

    if (taskEdit) {
      task = { id: taskEdit.id, ...task };
      dispatch(actions.update(task));
    } else {
      task = { id: new Date(), ...task };
      dispatch(actions.add(task));
    }
  };

  const handlerCancelButton = () => {
    dispatch(actions.cancelEdit());
    clearForm();
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <Styled.FlexContainer>
          <Title name="Nova Tarefa" subName="Aqui você pode criar uma nova tarefa..." />
          <input
            required
            maxLength="150"
            type="text"
            name="name"
            id="name"
            placeholder="Informe a tarefa..."
            onChange={handlerChangeName}
            value={name}
          />
          <textarea
            required
            name="description"
            id="description"
            placeholder="Informe a descrição da tarefa..."
            cols="30"
            rows="5"
            onChange={handlerChangeDescription}
            value={description}
          />
          {!taskEdit && <button type="submit">Adicionar Tarefa</button>}
          {!!taskEdit && (
            <Styled.AllButtonEdit>
              <button type="button" onClick={handlerCancelButton}>
                Cancelar
              </button>
              <button type="submit">Salvar</button>
            </Styled.AllButtonEdit>
          )}
        </Styled.FlexContainer>
      </form>
    </>
  );
};
