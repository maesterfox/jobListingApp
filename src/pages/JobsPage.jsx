import JobListings from "../components/JobListings";

const JobsPage = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">
          Job Listings
        </h1>
        <JobListings />
      </div>
    </section>
  );
};

export default JobsPage;
