import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Content>
      <Styled.H1>Bem vindo ao Gerenciador de Tarefas...</Styled.H1>
      <Styled.Backgroud src={'/images/to-do-list.png'} alt="" />
    </Styled.Content>
  );
};
