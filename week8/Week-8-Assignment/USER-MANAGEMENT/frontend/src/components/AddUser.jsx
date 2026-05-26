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

  const res = await fetch("https://mern-assign-backend-uidb.onrender.com/user-api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  });

} catch (err) {
  console.log(err);
}

} catch (err) {
  console.log(err);
}

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
    return (
      <p className='text-center text-3xl text-cyan-400 animate-pulse mt-10'>
        Loading...
      </p>
    )
  }

  if (error) {
    return (
      <p className='text-center text-2xl text-red-500 mt-10'>
        {error.message}
      </p>
    )
  }

  return (

    <div className='flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-black via-slate-900 to-purple-950'>

      <div className='backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl shadow-purple-500/20 w-full max-w-md p-10 rounded-3xl hover:scale-[1.02] transition-all duration-300'>

        <h1 className='text-5xl font-black text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse'>
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
            className='w-full p-4 rounded-xl bg-black/30 text-white border border-pink-400/30 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition-all'
          />

          <input
            type="email"
            {...register("email")}
            placeholder='Email Address'
            className='w-full p-4 rounded-xl bg-black/30 text-white border border-cyan-400/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 outline-none transition-all'
          />

          <input
            type="date"
            {...register("dateOfBirth")}
            className='w-full p-4 rounded-xl bg-black/30 text-white border border-purple-400/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all'
          />

          <input
            type="number"
            {...register("mobileNumber")}
            placeholder='Mobile Number'
            className='w-full p-4 rounded-xl bg-black/30 text-white border border-yellow-400/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none transition-all'
          />

          <button
            type="submit"
            className='w-full py-4 rounded-xl text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300'
          >
            Create User
          </button>

        </form>

      </div>

    </div>

  )
}

export default AddUser