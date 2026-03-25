import Button from "../components/Button";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-gradient-to-b from-black via-gray-900 to-pink-400"
    >
      {/* TITLE */}
      <h1 className="text-5xl font-extrabold mb-4 text-white">
        Nur-Radia
      </h1>

      {/* IMAGE (CENTER) */}
      <div className="my-6">
        <img
          src={profile}
          alt="profile"
          className="mx-auto w-56 h-56 md:w-72 md:h-72 object-cover object-top rounded-full border-4 border-pink-400 shadow-[0_0_60px_rgba(236,72,153,0.6)]"
        />
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-300 max-w-xl mb-6">
        Frontend Developer and Social Media Manager skilled in ReactJS, HTML, CSS, and JavaScript, with experience in creating responsive web interfaces and managing high-performing social media campaigns.
      </p>

      {/* BUTTON */}
      <Button text="View Projects" />
    </section>
  );
};

export default Hero;