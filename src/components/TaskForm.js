import React from "react";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ formData, handleChange, handleSubmit }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6"> {/* Spacing between form elements */}
      {/* Task Title */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700" htmlFor="title">
          Task Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title"
          className="w-full bg-white text-gray-800 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Task Status */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700" htmlFor="completed">
          Status:
        </label>
        <select
          id="completed"
          name="completed"
          value={formData.completed}
          onChange={handleChange}
          className="w-full bg-white text-gray-800 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={goBack}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
        >
          Go Back
        </button>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        >
          Save Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
