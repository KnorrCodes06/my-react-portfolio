const ProjectCard = ({ title, desc, link, file }) => {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-black via-gray-900 to-pink-500/30 border border-pink-500/20 shadow-lg hover:scale-105 transition duration-300">
      
      <h3 className="text-xl font-bold mb-2 text-white">
        {title}
      </h3>

      <p className="text-gray-300 text-sm mb-4">
        {desc}
      </p>

      <div className="flex gap-3 flex-wrap">
        
        {/* VIEW LINK */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm rounded-lg bg-pink-500 hover:bg-pink-600 transition"
          >
            Live Demo
          </a>
        )}

        {/* DOWNLOAD FILE */}
        {file && (
          <a
            href={file}
            download
            className="px-4 py-2 text-sm rounded-lg border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition"
          >
            Download
          </a>
        )}

      </div>
    </div>
  );
};

export default ProjectCard;