import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto text-center mt-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
        Welcome to the Property Rental Platform
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-600">
        Find and book properties with ease.
      </p>
      <Link to="/properties">
        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Properties
        </button>
      </Link>
    </div>
  );
};

export default Home;
