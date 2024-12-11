import logoImage from "../Asset/logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={logoImage} alt="Your Fitness" />
          <h2>Your Fitness</h2>
        </div>
        <div className="nav-items">
          <ul className="nav-ul">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "active" : "undefiend"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blogs"}
                className={({ isActive }) =>
                  isActive ? "active" : "undefiend"
                }
              >
                Fitness Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin"}
                className={({ isActive }) =>
                  isActive ? "active" : "undefiend"
                }
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "active" : "undefiend"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact-us"}
                className={({ isActive }) =>
                  isActive ? "active" : "undefiend"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="enquiry">
          <button className="btn">
            Call Us <i className=" icon fa fa-solid fa-phone"></i>
          </button>
          <button className="btn">
            Email Us <i className="icon fa fa-solid fa-envelope"></i>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
