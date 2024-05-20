import logo from "../assets/images/foxLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-600 py-6 text-center">
      <div className="container mx-auto">
        <img
          src={logo}
          alt="David Fox Logo"
          className="h-10 w-auto inline-block mb-2"
        />
        <small className="block mb-2 text-xs text-white">
          &copy; 2024 David Fox. All rights reserved.
        </small>
        <p className="text-xs text-white">
          <span className="font-semibold text-white">About this website:</span>{" "}
          built with React & Vite, Tailwind CSS, JSON-Server, Docker deployed to
          Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
