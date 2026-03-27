import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "InsinyAR",
      desc: "Interactive Lesson Material with Augmented Reality for MTB-MLE Chavacano Learners",
     file: "https://drive.google.com/uc?export=download&id=FILE_ID1TjX6t3J2WHn0wjMYD_hiQ-0Pf3TUOt8s",
    },
    {
      title: "My CV",
      desc: "Interested in my experience? Download my resume here.",
      file: "src/assets/CV-Nur-Radia_Lagoyo.pdf",
    },
    {
      title: "ZCVGS Store",
      desc: "Shopping UI with modern design.",
      link: "https://your-ecommerce.vercel.app",
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