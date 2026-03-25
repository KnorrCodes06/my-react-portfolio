import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;