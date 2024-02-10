import {
  CasesOutlined,
  CodeOutlined,
  ContactPageOutlined,
  DashboardOutlined,
  EditOutlined,
  EmailOutlined,
  LocationOnOutlined,
  TvOutlined,
  WebSharp,
} from "@mui/icons-material";
import "./Hero.css";
import devAvatar from "./assets/Profile photodev-avatar.png";
import downloadBtn from "./assets/Button.png";
import tag1 from "./assets/_h1_.png";
import tag2 from "./assets/h1_.png";
import tag3 from "./assets/_p_.png";
import tag4 from "./assets/p_.png";
const Hero = () => {
  const exp = [
    {
      id: 1,
      number: 3,
      label: "Programming Language",
    },
    {
      id: 2,
      number: 4,
      label: "Development Tools",
    },
    {
      id: 3,
      number: 2,
      label: "Years of Experience",
    },
  ];
  return (
    <div className="relative bg-[#292F36] pt-7 px-32 h-fit hero-wrapper pb-14">
      <div className="absolute top-8 left-5 flex flex-col py-2 px-3 items-center justify-center bg-[#1A1E23] border-[1px] border-[#e5e2e2] rounded-[24px]">
        <a href="">
          <DashboardOutlined className="text-[#e5e2e2] my-2 hero-mui" />
        </a>
        <a href="">
          <ContactPageOutlined className="text-[#e5e2e2] my-2 hero-mui" />
        </a>
        <a href="">
          <CodeOutlined className="text-[#e5e2e2] my-2 hero-mui" />
        </a>
        <a href="">
          <TvOutlined className="text-[#e5e2e2] my-2 hero-mui" />
        </a>
        <a href="">
          <EditOutlined className="text-[#e5e2e2] my-2 hero-mui" />
        </a>
        <a href="">
          <EmailOutlined className="text-[#e5e2e2] my-2 hero-mui" />
        </a>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex items-start hero-flex1">
          <h1 className="text-[#98FAEC] text-[48px] dev">Developer</h1>
          <div className="dev-info px-3 mr-16 mt-28 pb-7 pt-4 flex flex-col justify-between border-[2px] border-[#fff] rounded-tl-[120px] rounded-br-[120px] dev1">
            <div className="">
              <div className="flex flex-col items-center justify-between">
                <img
                  src={devAvatar}
                  alt="img"
                  className="devAvatar w-16 h-16"
                />
                <h2 className="text-white text-[20px]">Michael</h2>
                <p className="text-[#a7a7a7] text-[12px]">
                  Front-end Developer
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <EmailOutlined className="hero-icons" />
                <p className="text-[12px] text-[#e5e2e2] my-1">
                  adeshinaobafemi09@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <LocationOnOutlined className="hero-icons" />
                <p className="text-[12px] text-[#e5e2e2] my-1">Nigeria</p>
              </div>
              <div className="flex items-center">
                <CasesOutlined className="hero-icons" />
                <p className="text-[12px] text-[#e5e2e2] my-1">Remote</p>
              </div>
              <div className="flex items-center">
                <WebSharp className="hero-icons" />
                <p className="text-[12px] text-[#e5e2e2] my-1">
                  https://github.com/michado2019
                </p>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <button className="bg-[#25f4f1] text-[#e5e2e2] px-3 rounded-xl mx-1 text-[9px] py-1 cursor-none">
                HTML
              </button>
              <button className="bg-[#25f4f1] text-[#e5e2e2] px-3 rounded-xl mx-1 text-[9px] py-1 cursor-none">
                CSS
              </button>
              <button className="bg-[#25f4f1] text-[#e5e2e2] px-3 rounded-xl mx-1 text-[9px] py-1 cursor-none">
                JS
              </button>
              <button className="bg-[#25f4f1] text-[#e5e2e2] px-3 rounded-xl mx-1 text-[9px] py-1 cursor-none">
                REACT
              </button>
            </div>
            <div>
              <img src={downloadBtn} alt="img" className="w-28 h-8 my-3 mt-5" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between">
            <h1 className="text-[#98FAEC] text-[48px] dev2">Developer</h1>
            <div className="flex items-start justify-between mt-12 dev3">
              <div className="flex flex-col flex-start">
                <div className="flex flex-col flex-start">
                  <img src={tag1} alt="img" className="w-6 h-2" />
                  <div className="my-3">
                    <h1>
                      <span className="text-white text-[32px]">Hey</span>
                      <br />
                      <span className="text-white text-[32px]">I’m</span>
                      <span className="text-[#12f7d6] text-[32px]">
                        {" "}
                        Michael,
                      </span>
                      <br />
                      <span className="text-white text-[32px]">
                        Front-end developer
                      </span>
                    </h1>
                  </div>
                  <img src={tag2} alt="img" className="w-6 h-2" />
                </div>
                <div className="flex flex-col flex-start mt-7">
                  <img src={tag3} alt="img" className="w-5 h-2" />
                  <div className="my-3 text-[#c2c2c2] text-[14px]">
                    I help business grow by crafting amazing web experiences. If
                    you’re looking for a developer that likes to get stuff done,
                  </div>
                  <img src={tag4} alt="img" className="w-6 h-2" />
                </div>
                <div className="flex items-center">
                  <h2 className="text-[#12f7d6] text-[28px] mr-3 talk">
                    Let’s talk
                  </h2>
                  <EmailOutlined className="text-[#12f7d6] my-2 talk-mui p-1 bg-[#8b8b8b] rounded-full" />
                </div>
              </div>
              <div className="bg-[#1A1E23] rounded-[56px] p-4 ml-16 experience">
                {exp.map((each) => {
                  return (
                    <div
                      key={each.id}
                      className="flex items-center mb-3 pt-7 pb-5"
                    >
                      <h2 className="text-[#12f7d6] text-[24px] mr-3">
                        {each.number}
                      </h2>
                      <p className="text-[#c2c2c2] text-[14px]">{each.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
