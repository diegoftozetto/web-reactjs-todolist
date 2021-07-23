import P from 'prop-types';
import './styles.css';

export const Title = ({ name, subName }) => {
  return (
    <div className="home-title">
      <h1>{name}</h1>
      <p>{subName}</p>
    </div>
  );
};

Title.propTypes = {
  name: P.string.isRequired,
  subName: P.string.isRequired,
};
