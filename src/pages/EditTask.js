import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateTask } from "../redux/todoSlice";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.todos.tasks);
  const task = tasks.find((task) => task.id === Number(id));

  const [formData, setFormData] = useState({
    title: "",
    completed: false,
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        completed: task.completed,
      });
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask({ id: Number(id), ...formData }));
    navigate("/"); // Redirect to the home page after updating
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="flex items-center justify-center min-h-[71vh] bg-gray-100 p-4"> 
      <div className="max-w-lg w-full p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Edit Task</h1>
        {task ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div>
              <label htmlFor="title" className="block mb-2 font-semibold text-gray-700">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Status Field */}
            <div>
              <label htmlFor="completed" className="block mb-2 font-semibold text-gray-700">
                Status:
              </label>
              <select
                id="completed"
                name="completed"
                value={formData.completed}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition duration-200"
              >
                Go Back
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Update Task
              </button>
            </div>
          </form>
        ) : (
          <p className="text-center text-yellow-600">Task not found</p>
        )}
      </div>
    </div>
  );
};

export default EditTask;
