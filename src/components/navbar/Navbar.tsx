import { Link, useLocation } from "react-router-dom";
import logo from "./assets/_logo.png";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import "./Navbar.css";
type Path = "/" | "/blogs";
const Navbar = () => {
  const location = useLocation();

  // Function to determine if a link is active
  const isActiveLink = (path: Path) => {
    return location.pathname === path;
  };

  return (
    <div className="navbar-wrapper bg-[#292F36] py-7 px-12">
      <div className="navbar-contents flex items-center justify-between">
        <Link to="/" className="navbar-content1 flex">
          <img src={logo} alt="img" className="mx-[2px] w-12 h-6" />
          <h2 className="text-[#fff]">Michado</h2>
        </Link>
        <div className="navbar-content2 flex">
          <Link
            to="/"
            className={isActiveLink("/") ? "active-link" : "inactive-link"}
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className={isActiveLink("/blogs") ? "active-link" : "inactive-link"}
          >
            Blogs
          </Link>
        </div>
        <div className="navbar-content3 flex">
          <div className="flex items-center mx-2 cursor-pointer">
            <GitHub className="text-[#12F7D6] w-2 h-2 mui" />
            <h2 className="text-[#fff] mx-[2px] text-[14px]">Github</h2>
          </div>
          <div className="flex items-center mx-2 cursor-pointer">
            <LinkedIn className="text-[#12F7D6] w-2 h-2 mui" />
            <h2 className="text-[#fff] mx-[2px] text-[14px]">LinkedIn</h2>
          </div>
          <div className="flex items-center mx-2 cursor-pointer">
            <Twitter className="text-[#12F7D6] w-2 h-2 mui" />
            <h2 className="text-[#fff] mx-[2px] text-[14px]">Twitter</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
