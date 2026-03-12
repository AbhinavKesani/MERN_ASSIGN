import React from 'react'

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Task List</h3>

      {
        tasks.length === 0
          ? <p className="text-gray-500">empty</p>
          : tasks.map((task) => (
            <div key={task.id} className="mb-3 flex items-center gap-4">

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <p className={task.completed ? "line-through text-gray-400" : ""}>
                {task.title}
              </p>

              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>

            </div>
          ))
      }

    </div>
  )
}

export default TaskList


//if task list is empty then empty else iterate the list
//condition? empty