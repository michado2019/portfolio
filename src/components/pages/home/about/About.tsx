import scrollImg from "./assets/Scroll.png";
import aboutImg from "./assets/Image.png";
const About = () => {
  return (
    <div className="about-wrapper bg-[#292F36]">
      <div className="flex flex-col items-center justify-center">
        <img src={scrollImg} alt="img" className="" />
        <div className="flex items-center justify-between">
          <div className="flex  flex-col items-start">
            <h2>About me</h2>
            <p>
              Hello! My name is Sinan and I specialize in web developement that
              utilizes HTML, CSS, JS, and REACT etc. I am a highly motivated
              individual and eternal optimist dedicated to writing clear,
              concise, robust code that works. Striving to never stop learning
              and improving. When I'm not coding, I am writing bolgs, reading,
              or picking up some new hands-on art project like photography. I
              like to have my perspective and belief systems challenged so that
              I see the world through new eyes.
            </p>
          </div>
          <img src={aboutImg} alt="img" className="" />
        </div>
      </div>
    </div>
  );
};

export default About;
