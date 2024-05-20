import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      <div className="p-6">
        <div className="mb-4">
          <div className="text-gray-600 mb-2">{job.type}</div>
          <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
        </div>

        <div className="mb-4 text-gray-700">{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 hover:text-indigo-600 transition-colors duration-300 mb-4"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 font-semibold mb-4">
          {job.salary} / Year
        </h3>

        <div className="border border-gray-200 mb-4"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-orange-700 mb-3 lg:mb-0 flex items-center">
            <FaMapMarker className="inline text-lg mr-1" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm transition-colors duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

JobListing.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobListing;
