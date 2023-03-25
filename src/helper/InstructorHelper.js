import t1 from "../images/t1.jpg";
import t2 from "../images/t5.jpg";
import t3 from "../images/t6.jpg";
import t4 from "../images/t4.jpg";
import styling from "../styling/Instructor.module.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const InstructorHelper = (props) => {
  const a = [t1, t2, t3, t4];
  return (
    <li className={styling.instructorCard}>
      <div className={styling.imageContainer}>
        <img src={a[props.id]} className={styling.instructorImg}></img>
        <AiOutlineFacebook className={styling.fb} />
        <BsInstagram className={styling.insta} />
        <FiTwitter className={styling.twitter} />
      </div>
      <div className={styling.instructorName}>{props.instructorName} </div>
      <span className={styling.author}>{props.domain}</span>
      <div className={styling.line}></div>
      <img
        src="https://img.icons8.com/fluency-systems-filled/48/000000/administrator-male.png"
        className={styling.icon}
      />
      <span className={styling.iconRight}>{props.students} students</span>
      <img
        src="https://img.icons8.com/cotton/64/null/bookmark-documents--v3.png"
        className={styling.icon}
      />
      <span className={styling.iconRight}>{props.courses} Courses</span>
    </li>
  );
};
export default InstructorHelper;
