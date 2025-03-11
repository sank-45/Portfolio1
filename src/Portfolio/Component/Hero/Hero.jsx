import "./Hero.scss"
import HeroImg from "../../Component/Assets/Hero112-bg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {ReactTyped as Typed} from "react-typed";


const Hero=()=>{
  const navigate=useNavigate();
    useEffect(()=>{
        Aos.init({duration:1000});
    });

    const GoToContact=()=>{
        navigate("/contact");
    }

    

    return <section className="hero">
         <div className="hero_container wrapper">
            <div className="hero_left" data-aos="fade-up">
                <h3>Hello,I'am</h3>
                <h1>Sankalp<br/>Patil</h1>
                <Typed
                        strings={[" <h2>Fullstack Developer</h2>"]}
                        typeSpeed={150}
                        backSpeed={100}
                        loop />
                
                {/* <a href="" className="btn">Hier Me</a> */}
                <button className="btn" onClick={GoToContact}>Hire Me</button>
            </div>

            <div className="hero_right" data-aos="fade-left">
                <div className="hero-right-img">
                    <img src={HeroImg} alt="hero" />
                </div>

            </div>
         </div>
    </section>
};
export default Hero;