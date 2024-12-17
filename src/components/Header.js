import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => (
  <header className="bg-white shadow-md text-gray-800 p-4 flex justify-between items-center sticky top-0 z-10">
    {/* Title */}
    <h1 className="text-2xl font-bold text-gray-700">To-Do List Manager</h1>

    {/* Navigation Buttons */}
    <div className="space-x-4">
      <Link to="/">
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200">
          Home
        </button>
      </Link>
      <Link to="/add">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Add Task
        </button>
      </Link>
    </div>
  </header>
);

export default Header;
