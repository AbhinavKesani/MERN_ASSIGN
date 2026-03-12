import React from 'react'
import { useForm } from "react-hook-form";

function AddTask({ addTask }) {

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    addTask(data.task)
    reset()
  }

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">Add Task</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-3">

        <input
          type="text"
          placeholder="Enter task"
          {...register("task", {
            required: "Task required",
            minLength: { value: 3, message: "Minimum 3 characters" }
          })}
          className="border border-gray-400 p-2 rounded-md w-64"
        />

        {errors.task && <p className="text-red-500">{errors.task.message}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
          Add
        </button>

      </form>
    </div>
  )
}

export default AddTask