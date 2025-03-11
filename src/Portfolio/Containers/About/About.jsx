import './About.scss';
import ProfileImage from '../../Component/Assets/about.jpg'; // Replace with your image

const About = () => {
    return (
        <section className="about">
            <div className="about_container wrapper">
                <div className="about_content">
                    <h1>About Me</h1>
                    <p>
                        Hi, I'm Sankalp Patil, I am a passionate and detail-oriented Fullstack Developer
                         with expertise in building scalable, user-friendly web applications. With a 
                         strong foundation in both frontend and backend technologies. I specialize in 
                         front-end development using React, SCSS, and Vite, and I love creating seamless 
                         user experiences.
                    </p>
                    <p>
                        My journey in web development started with a curiosity for how websites work, and it has
                        grown into a full-fledged career. I enjoy solving complex problems and turning ideas into
                        reality through code.
                    </p>
                    <button className="about_button">
                        <a href='Blue_and_White_Professional_Resume.pdf' download="Sankalp_Patil_CV">Download Resume</a>
                    </button>
                </div>
                <div className="about_image">
                    <img src={ProfileImage} alt="Profile" className="profile_img" />
                </div>
            </div>
        </section>
    );
};

export default About;