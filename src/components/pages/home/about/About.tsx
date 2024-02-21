import scrollImg from "./assets/Scroll.png";
import aboutImg from "./assets/Image.png";
import tag3 from "./assets/p_.png"
import tag4 from "./assets/_p_.png"
import "./About.css"
const About = () => {
  return (
    <div className="about-wrapper bg-[#1A1E23] px-36 py-10">
      <div className="flex flex-col items-center justify-center">
        <img src={scrollImg} alt="img" className="scroll-img" />
        <div className="flex items-end justify-between mt-16">
          <div className="flex flex-col items-start">
            <h2 className="about-title px-4 mr-16 mb-7 py-1 border-[2px] text-[#fff] border-[#12f7d6] rounded-tl-[30px] bg-[#292F36] rounded-br-[30px] text-[32px]">About Me</h2>
            <div className="about-text bg-[#292F36] rounded-3xl p-4 w-[80%] text-[14px] text-[#fff]">
            <img src={tag3} alt="img" className="w-5 h-2 my-1" />
            <div>
              <div className="text-[#12f7d6] text-[28px] font-medium">Hello!</div> My name is Michael and I specialize in web developement that
              utilizes <span className="text-[#12f7d6]">HTML</span>,  <span className="text-[#12f7d6]">CSS</span>,  <span className="text-[#12f7d6]">JS</span>, and  <span className="text-[#12f7d6]">REACT</span> etc. I am a highly motivated
              individual and eternal optimist dedicated to writing clear,
              concise, robust code that works. Striving to never stop learning
              and improving. When I'm not coding, <span className="text-[#12f7d6]">I am writing bolgs</span>, reading,
              or picking up some new hands-on art project like photography. I
              like to have my perspective and belief systems challenged so that
              I see the world through new eyes.
            </div>
            <img src={tag4} alt="img" className="w-5 h-2 my-2" />
            </div>
          </div>
          <img src={aboutImg} alt="img" className=" about-img w-[300px] h-[320px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
