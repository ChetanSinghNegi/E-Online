import React, { Fragment } from "react";
import mySVG from "../images/img.svg";
import mySVG2 from "../images/spring.svg";
import { GiAtom } from "react-icons/gi";

import "../styling/Dashboard.css";
const Dashboard = () => {
  return (
    <Fragment>
      <header className="topbar">
        <nav className="main-dash">
          <span />
          <span className="logo-container">
            {/* <img src={mySVG2} alt="mySVG" className="e-online"></img> */}
            <GiAtom className="logo-img" />
            <span>E-ONLINE</span>
          </span>
          <ul className="dashboard-links">
            <li>
              <a className="nav-link" href="#" target={"_blank"}>
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#" target={"_blank"}>
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#" target={"_blank"}>
                Course
              </a>
            </li>
            <li>
              <a className="nav-link" href="#" target={"_blank"}>
                Blog
              </a>
            </li>
            <li>
              <a className="nav-link" href="#" target={"_blank"}>
                Contact
              </a>
            </li>
          </ul>
          <span>
            <button className="get-started">Get Started</button>
          </span>
        </nav>
      </header>
    </Fragment>
  );
};
export default Dashboard;
