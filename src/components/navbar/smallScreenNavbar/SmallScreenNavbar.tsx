import { Link, useLocation } from "react-router-dom";
import {
  BookOutlined,
  CancelOutlined,
  GitHub,
  HomeOutlined,
  LinkedIn,
  MenuOutlined,
  Twitter,
} from "@mui/icons-material";
import "./SmallScreenNavbar.css";
type Path = "/" | "/blogs";
type ToggledType = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const SmallScreenNavbar = (props: ToggledType) => {
  const location = useLocation();

  // Function to determine if a link is active
  const isActiveLink = (path: Path) => {
    return location.pathname === path;
  };

  //Props
  const { isOpened, setIsOpened } = props;
  console.log(isOpened);
  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div
      className="smallScreenNavbar-wrapper bg-[#fff] py-3 px-4 sm:py-7 sm:px-12 fixed h-full w-full"
      style={{
        marginTop: isOpened === false ? "-3000px" : "0",
        transition: "all 0.3s",
      }}
    >
      <div className="flex flex-col items-start justify-between">
        <div className="flex items-start justify-between w-full">
          <div
            className={`smallNavbar-links sm:flex ${
              isOpened ? "block" : "hidden"
            }`}
            id="sNavbar-link"
          >
            <Link
              to="/"
              className={`snavbar-link ${
                isActiveLink("/") ? "active-link" : "inactive-link"
              }`}
              onClick={toggleMenu}
            >
              <HomeOutlined className="text-[#12F7D6] w-7 h-2 mui2" />
              Home
            </Link>
            <Link
              to="/blogs"
              className={`snavbar-link ${
                isActiveLink("/blogs") ? "active-link" : "inactive-link"
              }`}
              onClick={toggleMenu}
            >
              <BookOutlined className="text-[#12F7D6] w-7 h-5 mui2" /> Blogs
            </Link>
            <div className="flex items-center mx-2 cursor-pointer" onClick={toggleMenu}>
              <GitHub className="text-[#12F7D6] w-5 h-5 mui" />
              <h2 className="text-[#1A1E23] mx-1 text-[20px]">GitHub</h2>
            </div>
            <div className="flex items-center mx-2 cursor-pointer" onClick={toggleMenu}>
              <LinkedIn className="text-[#12F7D6] w-5 h-5 mui" />
              <h2 className="text-[#1A1E23] mx-1 text-[20px]">LinkedIn</h2>
            </div>
            <div className="flex items-center mx-2 cursor-pointer" onClick={toggleMenu}>
              <Twitter className="text-[#12F7D6] w-5 h-5 mui" />
              <h2 className="text-[#1A1E23] mx-1 text-[20px]">Twitter</h2>
            </div>
          </div>
          <div className="sm:hidden">
            {isOpened ? (
              <div className="flex flex-col items-center" onClick={toggleMenu}>
                <CancelOutlined className="text-[#12F7D6] w-12 h-5 smui" />
              </div>
            ) : (
              <div className="flex items-center" onClick={toggleMenu}>
                <MenuOutlined className="text-[#12F7D6] w-12 h-5 smui" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
