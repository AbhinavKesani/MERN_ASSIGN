import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

function AddUser() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(null)
  let navigate = useNavigate()

  const onUserCreate = async (newUser) => {
    setLoading(true)
    setError(null)
    try {
      let res = await fetch("http://localhost:3000/user-api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      });
      let result = await res.json()
      if (res.status === 201) {
        navigate("/users-list")
      } else {
        throw new Error(error.message || "error occurred")
      }
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }
    if(loading===true){
    return <p className='text-center text-2xl text-blue-500'>Loading...</p>
  }
  if (error!==null){
    return <p className='text-2xl text-center text-red-500'>{error.message}</p>
  }
return (
  <div className='flex items-center justify-center min-h-screen px-4'>
    
    <div className='glass hover-card w-full max-w-md p-10 rounded-3xl'>
      
      <h1 className='text-4xl font-extrabold text-center mb-8'>
        Add New User
      </h1>

      <form onSubmit={handleSubmit(onUserCreate)} className='space-y-5'>

        <input
          type="text"
          {...register("name")}
          placeholder='Full Name'
          className='w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-purple-400'
        />

        <input
          type="email"
          {...register("email")}
          placeholder='Email Address'
          className='w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-purple-400'
        />

        <input
          type="date"
          {...register("dateOfBirth")}
          className='w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-purple-400'
        />

        <input
          type="number"
          {...register("mobileNumber")}
          placeholder='Mobile Number'
          className='w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-purple-400'
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