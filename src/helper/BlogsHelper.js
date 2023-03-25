import b1 from "../images/b3.png";
import b2 from "../images/b1.png";
import b3 from "../images/b2.png";
import styling from "../styling/Blogs.module.css";

const BlogsHelper = (props) => {
  const pics = [b1, b2, b3];
  return (
    <li className={styling.blogsCard}>
      <div className={styling.imageContainer}>
        <img src={pics[props.id]} className={styling.blogsImg}></img>
      </div>
      <span>April 22,2020 </span>
      <span>4 Comments </span>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus,
      </div>
      <a href="#">...Read More</a>
    </li>
  );
};
export default BlogsHelper;
