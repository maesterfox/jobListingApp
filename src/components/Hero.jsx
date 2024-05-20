import PropTypes from "prop-types";

const Hero = ({
  title = "Developer Jobs For You!",
  subtitle = "Find the role that fits your skill set",
}) => {
  return (
    <section className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-600 pt-20 mb-2 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;
