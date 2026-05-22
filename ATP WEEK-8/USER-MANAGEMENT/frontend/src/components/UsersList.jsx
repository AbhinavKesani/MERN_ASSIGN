import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function UsersList() {
   let [user,setUsers]=useState([])
   let navigate = useNavigate()
  useEffect(()=>{
    async function getUsers() {
      try {
        let res=await fetch("http://localhost:3000/user-api/users")
        if (res.status===200){
          let userData = await res.json()
          setUsers(userData)
          console.log(userData)
        } else {
          throw new Error("Failed to fetch")
        }
      } catch (err) {
        setError(err)
      }
      
    }
    getUsers()
  },[])

  return (
    <div>
      <h1>List of Users</h1>
      {

      }
    </div>
  )
}

export default UsersList