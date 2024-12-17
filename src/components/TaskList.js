import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/todoSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tasks } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleEdit = (taskId) => {
    navigate(`/edit/${taskId}`);
  };

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-700">
        Task List
      </h1>

      {/* Task List Grid */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white text-gray-800 flex flex-col justify-between"
          >
            {/* Task Content */}
            <div>
              <h2 className="font-semibold text-lg mb-2">{task.title}</h2>
              <p
                className={`text-sm ${
                  task.completed ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {task.completed ? "Completed" : "Pending"}
              </p>
            </div>

            {/* Edit Button */}
            <button
              onClick={() => handleEdit(task.id)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            >
              Edit Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
