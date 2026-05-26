import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function AddUser() {

  const { register, handleSubmit } = useForm()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const onUserCreate = async (newUser) => {

    setLoading(true)
    setError(null)

    try {

      const res = await fetch("http://localhost:3000/user-api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      })

      const result = await res.json()

      if (res.status === 201) {
        navigate("/users-list")
      } else {
        throw new Error(result.message || "Error occurred")
      }

    } catch (err) {

      setError(err)

    } finally {

      setLoading(false)

    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div className='flex items-center justify-center min-h-screen px-4'>

      <div className='glass hover-card w-full max-w-md p-10 rounded-3xl'>

        <h1 className='text-4xl font-extrabold text-center mb-8'>
          Add New User
        </h1>

        <form
          onSubmit={handleSubmit(onUserCreate)}
          className='space-y-5'
        >

          <input
            type="text"
            {...register("name")}
            placeholder='Full Name'
            className='w-full p-4 rounded-xl bg-white/10 border border-white/20'
          />

          <input
            type="email"
            {...register("email")}
            placeholder='Email Address'
            className='w-full p-4 rounded-xl bg-white/10 border border-white/20'
          />

          <input
            type="date"
            {...register("dateOfBirth")}
            className='w-full p-4 rounded-xl bg-white/10 border border-white/20'
          />

          <input
            type="number"
            {...register("mobileNumber")}
            placeholder='Mobile Number'
            className='w-full p-4 rounded-xl bg-white/10 border border-white/20'
          />

          <button
            type="submit"
            className='gradient-btn w-full py-4 rounded-xl text-lg font-bold'
          >
            Create User
          </button>

        </form>

      </div>

    </div>
  )
}

export default AddUser