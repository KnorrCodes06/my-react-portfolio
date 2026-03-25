import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-black text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        <ProjectCard
          title="Portfolio Website"
          desc="A modern portfolio built with React and Tailwind."
        />

        <ProjectCard
          title="E-commerce UI"
          desc="Clean shopping interface with great UX."
        />

        <ProjectCard
          title="Dashboard App"
          desc="Analytics dashboard with charts and data."
        />

      </div>
    </section>
  );
};

export default Projects;