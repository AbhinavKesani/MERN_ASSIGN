import React from 'react'

function TaskCount({ tasks }) {

  const completed = tasks.filter(task => task.completed).length

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold">Task Count</h3>
      <p className="text-2xl mt-4">Total: {tasks.length}</p>
      <p className="text-2xl text-green-600">Completed: {completed}</p>
    </div>
  )
}

export default TaskCount