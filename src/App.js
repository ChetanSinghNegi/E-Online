import { Fragment } from "react";
import Dashboard from "./pages/Dashboard.js";
import Finder from "./pages/Finder.js";
import Text1 from "./pages/Text1.js";
import CoursesNavBar from "./pages/CoursesNavBar.js";
import Courses from "./pages/Courses.js";
import Blogs from "./pages/Blogs.js";
import Footer from "./pages/Footer.js";
import "./index.css";
import Instructor from "./pages/Instructor.js";
function App() {
  const frontpic = require("./images/front-pic.png");
  return (
    <Fragment>
      <Dashboard />
      <Text1 />
      <Finder />
      <img src={frontpic} className="front-pic"></img>
      <CoursesNavBar />
      <Courses />
      <Instructor />
      <Blogs />
      <Footer />
    </Fragment>
  );
}

export default App;
