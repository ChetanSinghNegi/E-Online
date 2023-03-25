import styled from "../styling/Footer.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { GiAtom } from "react-icons/gi";

const Footer = () => {
  return (
    <>
      <div className={styled.footerContainer}>
        <span />
        <span className="eOnlineContainer">
          <GiAtom className={styled.logo} />
          <span className={styled.eOnline}>E-ONLINE</span>
          <div className={styled.list}>Privacy Policy</div>
          <div className={styled.list}>
            Copyright @Milton 2020 All right Reserved
          </div>
        </span>
        <span>
          <div className={styled.heading}>Home</div>
          <ul className={styled.unorderedList}>
            <a href="#" className={styled.list} id={styled.hov}>
              Home
            </a>
            <a href="#" className={styled.list} id={styled.hov}>
              About Us
            </a>
            <a href="#" className={styled.list} id={styled.hov}>
              Our Process
            </a>
            <a href="#" className={styled.list} id={styled.hov}>
              Services
            </a>
          </ul>
        </span>
        <span>
          <div className={styled.heading}>Latest Courses</div>
          <ul className={styled.unorderedList}>
            <a href="#" className={styled.list} id={styled.hov}>
              General Science
            </a>
            <a href="#" className={styled.list} id={styled.hov}>
              Web Development
            </a>
            <a href="#" className={styled.list} id={styled.hov}>
              Civil Engineering
            </a>
            <a href="#" className={styled.list} id={styled.hov}>
              Bussiness Studies
            </a>
          </ul>
        </span>
        <span>
          <div className={styled.heading}>Community</div>
          <ul className={styled.unorderedList}>
            <a href="#" className={styled.list} id={styled.hov}>
              Go Premium
            </a>
            <a href="#" className={styled.list} id={styled.hov}>
              Teams Plans
            </a>
            <a href="#" className={styled.list} id={styled.hov}>
              Refer a Friend
            </a>
            <a href="#" className={styled.list} id={styled.hov}>
              Gift Cards
            </a>
          </ul>
        </span>
        <span>
          <div className={styled.heading}>Stay Connected</div>
          <ul className={styled.unorderedList}>
            <li className={styled.list}>
              <FiTwitter className={styled.socialIcon} />
              <a href="#" className={styled.list}>
                Twitter
              </a>
            </li>
            <li className={styled.list}>
              <AiOutlineInstagram className={styled.socialIcon} />
              <a href="#" className={styled.list}>
                Instagram
              </a>
            </li>
            <li className={styled.list}>
              <FiYoutube className={styled.socialIcon} />
              <a href="#" className={styled.list}>
                Youtube
              </a>
            </li>
          </ul>
        </span>
        <span />
      </div>
    </>
  );
};
export default Footer;
