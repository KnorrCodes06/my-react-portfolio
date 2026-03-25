import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "My personal portfolio built with React and Tailwind.",
      link: "https://your-site.vercel.app",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Resume",
      desc: "Download my resume here.",
      file: "/resume.pdf",
    },
    {
      title: "E-commerce App",
      desc: "Shopping UI with modern design.",
      link: "https://your-ecommerce.vercel.app",
      github: "https://github.com/yourusername/ecommerce",
      file: "/project.zip",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-black text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            link={project.link}
            file={project.file}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;