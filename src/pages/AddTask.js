import React, { useState } from "react";
import TaskForm from "../components/TaskForm";

const AddTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    completed: false,
  });

  // Handles input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "completed" ? value === "true" : value, // Convert "completed" to boolean
    });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Submitted:", formData);
    alert("Task added successfully!"); // Simple feedback
    setFormData({ title: "", completed: false }); // Reset form after submission
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-100 p-4"> {/* Flex container to center content */}
      <div className="max-w-lg w-full p-6 bg-white shadow-md rounded-md mx-auto mt-12"> {/* Centering form */}
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Add New Task</h2>
        <TaskForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddTask;
