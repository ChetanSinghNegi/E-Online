import { Fragment } from "react";
import "../index.css";

const Finder = () => {
  return (
    <Fragment>
      <span className="finder">
        <select>
          <option value="0" className="category">
            Category :
          </option>
          <option value="1">Web Development</option>
          <option value="2">Data Structures and Algorithms</option>
          <option value="3">Data Science</option>
          <option value="4">Dev-Ops</option>
          <option value="5">Front-End Master Course</option>
        </select>
        <input
          type={"text"}
          placeholder={"What do you want to Learn ?"}
          className="choose"
        ></input>
        <button className="search">Search</button>
      </span>
    </Fragment>
  );
};

export default Finder;
