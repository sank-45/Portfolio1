import './Project.scss';
import Project1 from '../../Component/Assets/Project1.jpeg'; // Replace with your project images
import Project2 from '../../Component/Assets/project2.jpeg';
import Project3 from '../../Component/Assets/project3.jpeg';
// import Project4 from '../../Component/Assets/client1.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "shrikrishna Arogyam massage therapy.",
            image: Project1,
            link: "#",
            technologies: ["React", "SCSS", "Vite"],
        },
        {
            id: 2,
            title: "Project 2",
            description: "TripZip Travel Agency.",
            image: Project2,
            link: "#",
            technologies: ["Html", "Css", "JavaScript"],
        },
        {
            id: 3,
            title: "Project 3",
            description: "Aashram",
            image: Project3,
            link: "#",
            technologies: ["HTML", "CSS", "JavaScript"],
        },
        // {
        //     id: 4,
        //     title: "Project 4",
        //     description: "A blog platform with user authentication.",
        //     image: Project4,
        //     link: "#",
        //     technologies: ["React", "Firebase", "Tailwind CSS"],
        // },
    ];

    return (
        <section className="projects">
            <div className="projects_container wrapper">
                <h1>My Projects</h1>
                <p>Here are some of the projects I've worked on. Click on a project to learn more.</p>

                <div className="projects_grid">
                    {projects.map((project) => (
                        <div className="project_card" key={project.id}>
                            <div className="project_image">
                                <img src={project.image} alt={project.title} />
                                <div className="project_overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project_technologies">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index}>{tech}</span>
                                        ))}
                                    </div>
                                    {/* <a href={project.link} className="project_button">
                                        View Project
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;