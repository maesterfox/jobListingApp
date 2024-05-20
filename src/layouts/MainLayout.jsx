import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen">
      <Navbar />
      <Outlet />
      <ToastContainer />
      <Footer />
    </div>
  );
};
export default MainLayout;
