import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen">
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </div>
  );
};

export default HomePage;
