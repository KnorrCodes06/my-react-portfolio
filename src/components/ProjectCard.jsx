import Button from "./Button";

const ProjectCard = ({ title, desc }) => {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-black via-gray-900 to-pink-500/30 border border-pink-500/20 shadow-lg hover:scale-105 transition duration-300">
      
      <h3 className="text-xl font-bold mb-2 text-white">
        {title}
      </h3>

      <p className="text-gray-300 text-sm mb-4">
        {desc}
      </p>

      <Button text="View Project" />
    </div>
  );
};

export default ProjectCard;