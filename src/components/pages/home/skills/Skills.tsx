import scrollImg from "./assets/Scroll.png";
import codeImg from "./assets/_logo.png";
import skillsImg from "./assets/Title.png";
import webIcon from "./assets/Icon.png";
import phoneIcon from "./assets/icon-smartphone.png";
import html from "./assets/htmlIcon.png";
import css from "./assets/cssIcon.png";
import js from "./assets/jsIcon.png";
import react from "./assets/reactIcon.png";
import "./Skills.css"
const Skills = () => {
  return (
    <div className="skills-wrapper bg-[#292F36] flex flex-col items-center relative py-10 h-[100vh] px-5">
      <img src={scrollImg} alt="img" className="scroll-img" />
      <img
        src={codeImg}
        alt="img"
        className=" code-img absolute top-24 left-[60%] w-32 h-18"
      />
      <img src={skillsImg} alt="img" className="code w-20 mt-5" />
      <div className="text-[#fff] mt-3">
        I am striving to never stop learning and improving
      </div>
      <div className="skills-cards flex items-center justify-between">
        <div className="skill-cards-div flex flex-col items-center justify-center bg-[#98FAEC] rounded-md m-7 mt-9 border-l-[4px] p-3 min-w-[200px] border-l-[#0C73B8]">
          <img src={webIcon} alt="img" className="icons w-5" />
          <h2 className="text-[14px] font-semibold text-[#43454D]">web developement</h2>
          <p className="text-[10px] text-[#43454D]">HTML·CSS·JS·REACT</p>
        </div>
        <div className="skill-cards-div flex flex-col items-center justify-center bg-[#98FAEC] rounded-md m-7 border-l-[4px] p-3 min-w-[200px] border-l-[#0C73B8]">
          <img src={phoneIcon} alt="img" className="icons w-5" />
          <h2 className="text-[14px] font-semibold text-[#43454D]">Technical Writting</h2>
          <p className="text-[10px] text-[#43454D]">WEB DEVELOPMENT</p>
        </div>
      </div>
      <div className=" icons flex items-center">
        <div className="flex items-center">
          <div className="icons-div flex flex-col items-center m-10 mt-1">
            <img src={html} alt="img" className="icons w-20 h-20" />
            <p className="text-[#E54F26] mt-3">HTML</p>
          </div>
          <div className="icons-div flex flex-col items-center m-10 mt-1">
            <img src={css} alt="img" className="icons w-20 h-20" />
            <p className="text-[#0C73B8] mt-3">CSS</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="icons-div flex flex-col items-center m-10 mt-1">
            <img src={js} alt="img" className="icons w-20 h-20" />
            <p className="text-[#E7A020] mt-3">JS</p>
          </div>
          <div className="icons-div flex flex-col items-center m-10 mt-1">
            <img src={react} alt="img" className="icons w-20 h-20" />
            <p className="text-[#28A9E0] mt-3">REACT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
