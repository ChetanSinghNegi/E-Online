import { Fragment } from "react";
import BlogsHelper from "../helper/BlogsHelper";
import BlogsCard from "../helper/BlogsCard";
import styling from "../styling/Blogs.module.css";

const Blogs = () => {
  const renderList = [];
  for (let i = 0; i < 3; i++) {
    renderList.push(<BlogsHelper key={i} id={i}></BlogsHelper>);
  }
  return (
    <Fragment>
      <div className={styling.readContainer}>
        <span>Read Our Blogs</span>
        <button>View All</button>
      </div>
      <BlogsCard>{renderList}</BlogsCard>
    </Fragment>
  );
};
export default Blogs;
