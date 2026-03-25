import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Insinyar",
      desc: "Development of Interactive Lesson Material with Augmented Reality for MTB-MLE Chavacano Learners",
      link: "https://drive.google.com/drive/u/1/folders/1OE9ggwRYxzHkFaAPKJPjYwIZmMLlQ23S?fbclid=IwY2xjawQxNeRleHRuA2FlbQIxMABicmlkETE1eUE5dVQzZkFrSkVvU2x6c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHopMVuKVi5s0nyvfjYSlnc9jZQ0L_D7nGbWFuftBU2QnYN57A0HgRcv9xrZ4_aem_9R0vvmSVJMfK5lnVpSDKDg",
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