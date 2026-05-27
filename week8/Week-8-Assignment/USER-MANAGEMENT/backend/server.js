import exp from 'express'
import { UserApp } from './APIs/UserAPI.js'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import cors from 'cors'

// dotenv configuration
config()

// create express app
const app = exp()

// cors middleware
app.use(cors())

// body parser middleware
app.use(exp.json())

// routes
app.use("/user-api", UserApp)

// database connection
async function ConnectDB() {

  try {

    await connect(process.env.MONGODB_URL, {
  dbName: "userdb"
})

    console.log("Connected to Database")

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })

  } catch (e) {

    console.log(e)

    throw new Error("Database Connection Failed")
  }
}

ConnectDB()

// global error handling middleware
app.use((err, req, res, next) => {

  // mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    })
  }

  // invalid object id
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    })
  }

  // duplicate key error
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    })
  }

  // internal server error
  res.status(500).json({
    message: "Internal Server Error",
  })
})