import "./styles.css";

export const Title = (props) => {
  const { name, subName } = props;

  return (
    <div className="home-title">
      <h1>{name}</h1>
      <p>{subName}</p>
    </div>
  );
};
