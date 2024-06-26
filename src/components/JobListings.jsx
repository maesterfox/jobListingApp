import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const jobsPerPage = isHome ? 3 : 6;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/jobs.json"); // Ensure the path is correct
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setJobs(data.jobs);
        setTotalPages(Math.ceil(data.jobs.length / jobsPerPage));
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Failed to fetch jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const displayedJobs = jobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );

  return (
    <section className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 px-4 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedJobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className={`px-4 py-2 rounded shadow-md transition-all duration-300 ${
              page === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-500 text-white hover:bg-indigo-600"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-500">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded shadow-md transition-all duration-300 ${
              page === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-500 text-white hover:bg-indigo-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

JobListings.propTypes = {
  isHome: PropTypes.bool,
};

export default JobListings;
