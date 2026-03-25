const Button = ({ text }) => {
  return (
    <button className="px-6 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-pink-400 via-fuchsia-500 to-pink-500 hover:opacity-90 transition duration-300 shadow-lg">
      {text}
    </button>
  );
};

export default Button;