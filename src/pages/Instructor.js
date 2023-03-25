import InstructorCard from "../helper/InstructorCard.js";
import InstructorHelper from "../helper/InstructorHelper";
import styling from "../styling/Instructor.module.css";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const instructorList = [
  [0, "Jesse Pinkman", "UI & UX Designer", 1004, 12],
  [1, "Walter White", "Software Developer", 2004, 15],
  [2, "Skyler White", "Dev-ops Engineer", 3004, 5],
  [3, "Jane Margolis", "AWS Specialist", 500, 10],
  // [4, "Jesse Pinkman", "UI & UX Designer",1004, 12],
  // [5, "Master Web Design", "admin", 3],
];
const Instructor = () => {
  const renderList = instructorList.map((instructor) => {
    // console.log(instructor);
    return (
      <InstructorHelper
        key={instructor[0]}
        id={instructor[0]}
        instructorName={instructor[1]}
        domain={instructor[2]}
        students={instructor[3]}
        courses={instructor[4]}
      ></InstructorHelper>
    );
  });
  return (
    <section>
      <div className={styling.headingContainer}>
        <span>Our Instructors</span>
        <BsArrowLeft className={styling.leftArrow} />
        <BsArrowRight className={styling.rightArrow} />
      </div>
      <InstructorCard>{renderList}</InstructorCard>
    </section>
  );
};
export default Instructor;
