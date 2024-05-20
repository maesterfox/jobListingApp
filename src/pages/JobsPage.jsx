import JobListings from "../components/JobListings";

const JobsPage = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-10 min-h-screen">
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
