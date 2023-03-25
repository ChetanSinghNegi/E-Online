import i0 from "../images/i1.jpg";
import i1 from "../images/i2.jpg";
import i2 from "../images/i3.jpg";
import i3 from "../images/i4.jpg";
import i4 from "../images/i5.jpg";
import i5 from "../images/i6.jpg";
import "../styling/Courses.css";
const CoursesHelper = (props) => {
  const a = [i0, i1, i2, i3, i4, i5];
  return (
    <li className="course-card">
      {/* <a href="https://icons8.com/icon/p4tNZB7kgk24/administrator-male"></a> */}
      {/* <a href="https://icons8.com/icon/1112/timer"></a> */}
      <img src={a[props.id]} className="course-img"></img>
      <div className="courseName">{props.courseName} </div>
      <span className="author">lecturer {props.author} in Creative Design</span>
      <div className="line"></div>
      <img
        src="https://img.icons8.com/fluency-systems-filled/48/000000/administrator-male.png"
        className="icon"
      />
      <span className="icon-right">2006</span>
      <img
        src="https://img.icons8.com/ios/50/000000/timer.png"
        className="icon"
      />
      <span className="icon-right">{props.hours} hrs</span>
      <img
        src="https://img.icons8.com/cotton/64/null/bookmark-documents--v3.png"
        className="icon"
      />
      <span className="icon-right">Lectures</span>
    </li>
  );
};

export default CoursesHelper;
