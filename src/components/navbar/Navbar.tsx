import { Link } from "react-router-dom";
import logo from "./assets/_logo.png";
import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-contents flex">
        <div className="navbar-content1 flex mr-auto">
          <img src={logo} alt="img" className="" />
          <h2>Michado</h2>
        </div>
        <div className="navbar-content2 flex mr-auto">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
        <div className="navbar-content3 flex">
          <div className="flex items-center">
            <GitHub />
            <h2>Github</h2>
          </div>
          <div className="flex items-center">
            <LinkedIn />
            <h2>LinkedIn</h2>
          </div>
          <div className="flex items-center">
            <Twitter />
            <h2>Twitter</h2>
          </div>
          <div className="flex items-center">
            <Email />
            <h2>Email</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
