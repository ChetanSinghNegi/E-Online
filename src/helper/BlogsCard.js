import styling from "../styling/Blogs.module.css";
const Card = (props) => {
  return <ul className={styling.renderContainer}>{props.children}</ul>;
};
export default Card;
