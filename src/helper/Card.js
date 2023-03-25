import "../styling/Courses.css";
const Card = (props) => {
  return <ul className="render-container">{props.children}</ul>;
};
export default Card;
