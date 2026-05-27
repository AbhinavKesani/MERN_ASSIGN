useEffect(() => {

  const getUsers = async () => {

    try {

      const res = await fetch(
        "https://mern-assign-backend-uidb.onrender.com/user-api/users"
      )

      const data = await res.json()

      console.log(data)

      setUsers(data.payload)

    } catch (err) {

      console.log(err)

    }

  }

  getUsers()

}, [])