const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/70 backdrop-blur-md border-b border-pink-500/20">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-pink-400">
         Knorr.Codes
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-pink-400 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-pink-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-pink-400 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;