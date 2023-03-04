import "./layout/Header.css";
import { AiFillLinkedin } from "react-icons/ai";


function Header() {
  return (
    <div className="Header" id="Header">
      <div className="navbar">
        <h1>Aalbert Jan Kwint</h1>
        <div className="infomation-container">
          <div>
            <ul>
              <li>
                <a href="#Main">Gallery</a>
              </li>
              <li>
                <a href="#about-me">About Me</a>
              </li>
              <li>
                <a href="#Footer">Contact</a>
              </li>
            </ul>
          </div>
        <div className="contact">
          <ul>
            <li>
              <a
                target={"_blank"}
                href="https://www.linkedin.com/in/alfred-kwint-a3899b118/"
              >
                <AiFillLinkedin size={35} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
