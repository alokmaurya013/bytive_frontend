import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-4 w-full"> {/* Ensure full width */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left: Site Information */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-lg font-bold text-gray-700">To-Do List Manager</h2>
            <p className="text-sm mt-1 text-gray-600">
              Simplify your tasks, stay productive.
            </p>
          </div>

          {/* Middle: Navigation Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
            >
              Home
            </a>
            <a
              href="/add"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
            >
              Add Task
            </a>
          </div>

          {/* Right: Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition duration-200"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition duration-200"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="text-center mt-4 text-sm border-t border-gray-300 pt-4">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} To-Do List Manager. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
