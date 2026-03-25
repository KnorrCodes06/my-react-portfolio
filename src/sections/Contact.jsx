import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_pibf0dj",
      "template_828jx9i",
      form,
      "rFFDGhSNN3JIKd9nz"
    )
    .then(() => {
      alert("Message sent successfully ✅");
      setForm({ email: "", subject: "", message: "" });
    })
    .catch(() => {
      alert("Failed to send ❌");
    });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-pink-400 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Contact Me</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl bg-black/70 text-white border border-pink-400"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl bg-black/70 text-white border border-pink-400"
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl bg-black/70 text-white border border-pink-400"
        />

        <button
          type="submit"
          className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-400 via-fuchsia-500 to-pink-500"
        >
          Send Message
        </button>

      </form>
    </section>
  );
};

export default Contact;