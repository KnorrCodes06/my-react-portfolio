import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // 🔊 Sounds
  const successSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
  const errorSound = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");

  // ⌨️ ESC to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setStatus(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // 🧠 Validation
  const validate = () => {
    let newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.subject) newErrors.subject = "Subject is required";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_pibf0dj",
        "template_828jx9i",
        form,
        "rFFDGhSNN3JIKd9nz"
      )
      .then(() => {
        setStatus("success");
        successSound.play();
        setForm({ email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
        errorSound.play();
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus(null), 3000);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-pink-500 px-6">

      {/* 🔔 PREMIUM TOAST */}
      {status && (
        <div
          onClick={() => setStatus(null)}
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative px-8 py-6 rounded-2xl shadow-2xl border backdrop-blur-md
            animate-slideIn transition-all duration-500
            ${status === "success"
              ? "bg-green-500/20 border-green-400 text-green-200 shadow-green-500/30"
              : "bg-red-500/20 border-red-400 text-red-200 shadow-red-500/30"}`}
          >

            {/* ❌ Close */}
            <button
              onClick={() => setStatus(null)}
              className="absolute top-2 right-3 text-white/70 hover:text-white text-lg"
            >
              ✖
            </button>

            {/* Content */}
            <div className="flex items-center gap-3 justify-center">
              <div className="text-2xl">
                {status === "success" ? "✅" : "❌"}
              </div>

              <div className="text-base font-medium">
                {status === "success"
                  ? "Message sent successfully"
                  : "Failed to send message"}
              </div>
            </div>

            {/* Progress */}
            <div className="mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white/70 animate-progress"></div>
            </div>

          </div>
        </div>
      )}

      {/* 💎 FORM */}
      <div className="w-full max-w-xl p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/60 text-white border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/60 text-white border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.subject && (
              <p className="text-red-300 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/60 text-white border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.message && (
              <p className="text-red-300 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300
            ${loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-400 via-fuchsia-500 to-pink-500 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40"}`}
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;