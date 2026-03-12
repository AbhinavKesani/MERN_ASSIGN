import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskCount from './TaskCount'
import TaskList from './TaskList'

function ManageTask() {

    let [tasks, setTasks] = useState([])

    // add new task
    const addTask = (taskTitle) => {
        const newTask = {
            id: Date.now(),
            title: taskTitle,
            completed: false
        }

        setTasks(prev => [...prev, newTask])
    }

    // delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    // toggle complete
    const toggleTask = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        )
    }

    return (
        <div className="p-10">

            <h1 className="text-5xl text-blue-400 mb-12 text-center">
                Manage Task
            </h1>

            <div className="flex justify-center items-start gap-24">

                <AddTask addTask={addTask} />

                <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />

                <TaskCount tasks={tasks} />

            </div>

        </div>
    )
}

export default ManageTask