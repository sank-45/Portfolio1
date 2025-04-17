import "./Hero.scss";
import HeroImg from "../../Component/Assets/ghibli2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const navigate = useNavigate();
     
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
    
  const GoToContact = () => {
    navigate("/contact");
  };

  return (
    <section className="hero">
      <div className="hero_container wrapper">
        <div className="hero_left" data-aos="fade-up">
          <h3>Hello, I'm</h3>
          <h1>
            Sankalp
            <br />
            Patil
          </h1>
          <ReactTyped
            strings={["<spam>Fullstack Developer</spam>"]}
            typeSpeed={150}
            backSpeed={100}
            loop
            showCursor={false}
          />
          <br />
          <div className="btn-container">
                        <button className="liquid-btn">
                            <span className="liquid"></span>
                            <span className="btn-text" onClick={GoToContact}>
                            Hire Me</span>
                        </button>
                    </div>
        </div>

        <div className="hero_right" data-aos="fade-left">
          <div className="hero-right-img">
            <img src={HeroImg} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
