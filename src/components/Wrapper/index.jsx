import P from 'prop-types';
import * as Styled from './styles';

export const Wrapper = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Wrapper.propTypes = {
  children: P.node.isRequired,
};
