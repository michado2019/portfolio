import { Link, useLocation } from "react-router-dom";
import { CancelOutlined, GitHub, LinkedIn, MenuOutlined, Twitter } from "@mui/icons-material";
import "./SmallScreenNavbar.css"
type Path = "/" | "/blogs";
type ToggledType = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const SmallScreenNavbar = (props: ToggledType) => {
  const location = useLocation();

  // Function to determine if a link is active
  const isActiveLink = (path: Path) => {
    return location.pathname === path;
  };

  //Props
  const {isOpened, setIsOpened} = props;
  console.log(isOpened)
  const toggleMenu = () => {
    setIsOpened(!isOpened);
  }

  return (
    <div className="smallScreenNavbar-wrapper bg-[#fff] py-3 px-4 sm:py-7 sm:px-12 fixed" style={{marginTop: isOpened===false?"-300px":"70px", transition: 'all 0.3s'}}>
      <div className="flex flex-col items-start justify-between">
        <div className="flex flex-col items-center">
          <div id="menu" className="sm:hidden">
            {isOpened ? (
              <div className="flex flex-col items-center" onClick={toggleMenu}>
                <CancelOutlined className="text-[#12F7D6] w-5 h-5 mui" />
              </div>
            ) : (
              <div className="flex items-center" onClick={toggleMenu}>
                <MenuOutlined className="text-[#12F7D6] w-5 h-5 mui" />
              </div>
            )}
          </div>
          <div className={`smallNavbar-links sm:flex ${isOpened ? 'block' : 'hidden'}`}>
            <Link
              to="/"
              className={`navbar-link ${isActiveLink("/") ? "active-link" : "inactive-link"}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className={`navbar-link ${isActiveLink("/blogs") ? "active-link" : "inactive-link"}`}
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <div className="flex items-center mx-2 cursor-pointer">
              <GitHub className="text-[#12F7D6] w-5 h-5 mui" />
              <h2 className="text-[#fff] mx-1 text-sm">GitHub</h2>
            </div>
            <div className="flex items-center mx-2 cursor-pointer">
              <LinkedIn className="text-[#12F7D6] w-5 h-5 mui" />
              <h2 className="text-[#fff] mx-1 text-sm">LinkedIn</h2>
            </div>
            <div className="flex items-center mx-2 cursor-pointer">
              <Twitter className="text-[#12F7D6] w-5 h-5 mui" />
              <h2 className="text-[#fff] mx-1 text-sm">Twitter</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
