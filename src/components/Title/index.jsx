import P from 'prop-types';
import * as Styled from './styles';

export const Title = ({ name, subName }) => {
  return (
    <Styled.HomeTitle>
      <h1>{name}</h1>
      <p>{subName}</p>
    </Styled.HomeTitle>
  );
};

Title.propTypes = {
  name: P.string.isRequired,
  subName: P.string.isRequired,
};
