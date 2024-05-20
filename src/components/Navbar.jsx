import { NavLink } from "react-router-dom";
import logo from "../assets/images/foxLogo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 transition-all duration-300"
      : "text-white hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 transition-all duration-300";

  return (
    <nav className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-600  fixed w-full z-10 top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="Fox Dev Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Fox Dev Jobs
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
