import './Project.scss';
import Project1 from '../../Component/Assets/Project1.png';
import Project2 from '../../Component/Assets/Project2.png';
import Project3 from '../../Component/Assets/Project3.png';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A personal portfolio website built with React and SCSS showcasing my skills, projects, and contact info.",
            image: Project1,
            link: "",
        },
        {
            id: 2,
            title: "ShrikrishnaArogyam - Wellness Website",
            description: "A clean and calming website built for a massage therapy center to showcase their services, promote health and wellness, and enable client inquiries.",
            image: Project2,
            link: "https://shrikrishnaarogyammassagetherapy.com/",
        },
        {
            id: 3,
            title: "ERP System - Nebula Technology",
            description: "A custom-built ERP platform developed for Nebula Technology to manage internal operations like HR, inventory, billing, and reporting with role-based access and real-time dashboards.",
            image: Project3,
            link: "https://nebula-technology.com/",
        },
    ];

    return (
        <section className="projects">
            <div className="projects_container wrapper">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    My Projects
                </motion.h1>

                <div className="projects_grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project_card"
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="project_image">
                                <img src={project.image} alt={project.title} />
                                <div className="project_overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a href={project.link} className="project_button">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
