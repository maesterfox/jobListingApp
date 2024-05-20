import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/jobs"
        className="block font-extrabold text-xl text-white text-center py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 transition-all duration-300 shadow-lg"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
