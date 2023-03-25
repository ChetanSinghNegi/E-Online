import { Fragment } from "react";

const CoursesNavBar = () => {
  return (
    <Fragment>
      <section className="courses-nav-bar">
        <header className="heading-courses-nav-bar">Our Online Courses</header>
        <ul>
          <li>
            <a href="#">ALL</a>
          </li>
          <li>
            <a href="#">BUSINESS</a>
          </li>
          <li>
            <a href="#">DESIGN</a>
          </li>
          <li>
            <a href="#">DEVELOPMENT</a>
          </li>
          <li>
            <a href="#">MANAGEMENT</a>
          </li>
          <li>
            <a href="#">TECHNOLOGY</a>
          </li>
          <li>
            <a href="#">PHOTO</a>
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default CoursesNavBar;
