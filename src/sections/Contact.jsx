import Button from "../components/Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-black to-pink-400 text-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-white">
        Contact Me
      </h2>

      <p className="text-gray-300 mb-6">
        Have a project in mind? Let’s build something amazing.
      </p>

      <Button text="Email Me" />
    </section>
  );
};

export default Contact;