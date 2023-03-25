import Card from "../helper/Card";
import CoursesHelper from "../helper/CoursesHelper";
import "../styling/Courses.css";
const coursesList = [
  [0, "Master Web Design", "admin", 10],
  [1, "App Development", "admin", 8],
  [2, "Master Web Design", "admin", 6],
  [3, "Master Web Design", "admin", 15],
  [4, "Master Web Design", "admin", 12],
  [5, "Master Web Design", "admin", 3],
];

const Courses = () => {
  const renderList = coursesList.map((course) => {
    console.log(course);
    return (
      <CoursesHelper
        key={course[0]}
        id={course[0]}
        courseName={course[1]}
        author={course[2]}
        hours={course[3]}
      ></CoursesHelper>
    );
  });
  return (
    <section>
      <Card>{renderList}</Card>
    </section>
  );
};
export default Courses;
