# 📖 ATP WEEK-8

# 🌐 Full Stack User Management Application

This folder contains a full-stack application developed using:

- ReactJS
- Node.js
- Express.js
- MongoDB
- Mongoose

The project demonstrates how frontend and backend applications communicate together to build a complete user management system.

---

# 📂 Folder Structure

```bash
ATP WEEK-8
│
├── backend
│   ├── APIs
│   ├── models
│   ├── rest.http
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── frontend
    ├── src
    ├── public
    ├── package.json
    ├── vite.config.js
    └── package-lock.json
```

---

# 🧠 Technologies Used

# ⚛️ Frontend

- ReactJS
- JavaScript
- CSS3
- Vite

---

# 🖥️ Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

# 🔄 Full Stack Workflow

```text
Frontend UI
      ↓
API Request
      ↓
Express Server
      ↓
Route Handling
      ↓
MongoDB Database
      ↓
Response Sent Back
      ↓
Frontend Updates UI
```

---

# 🖥️ Backend Section

# 📂 Backend Folder Structure

```bash
backend
│
├── APIs
├── models
├── rest.http
├── server.js
├── package.json
└── package-lock.json
```

---

# 🌐 server.js

# 🧠 Main Backend Server

This is the entry point of the backend application.

---

## 📌 Responsibilities

✅ Create Express Server  
✅ Configure Middleware  
✅ Handle API Routes  
✅ Connect Database  
✅ Start Backend Server  

---

## 📌 Concepts Covered

- Express Server Setup
- Middleware Integration
- API Routing
- JSON Parsing
- Backend Architecture

---

## 🧠 Example Features

### Parse JSON Requests

```js
app.use(express.json())
```

---

### Start Server

```js
app.listen(PORT)
```

---

# 📂 APIs Folder

Contains all backend API route handlers.

---

# 📄 UserAPI.js

# 👤 User Management APIs

Handles all user-related backend operations.

---

## 📌 Features

✅ Add Users  
✅ Read User Data  
✅ API Routing  
✅ Request Handling  
✅ Response Handling  

---

## 📌 Concepts Covered

- REST APIs
- Express Router
- CRUD Basics
- Route Management

---

# 🔄 User API Workflow

```text
Frontend Form
      ↓
POST Request
      ↓
User API Route
      ↓
Process Data
      ↓
Store in Database
      ↓
Return Response
```

---

# 📂 models Folder

Contains MongoDB database schemas using Mongoose.

---

# 📄 UserModel.js

# 👤 User Database Schema

Defines the structure of user data.

---

## 📌 Features

✅ User Schema  
✅ Data Validation  
✅ MongoDB Collection Structure  

---

## 🧠 Example Schema

```js
const UserSchema = new mongoose.Schema({
    name: String,
    email: String
})
```

---

## 🎯 Learning Outcome

Understand how MongoDB models are created using Mongoose.

---

# 📄 rest.http

# 🧪 API Testing File

Used for testing backend APIs directly.

---

## 📌 Features

✅ Test GET Requests  
✅ Test POST Requests  
✅ Verify API Responses  
✅ Backend Debugging  

---

## 📌 HTTP Methods Used

```http
GET
POST
PUT
DELETE
```

---

# 📦 package.json

# 📌 Backend Dependency Management

Stores project dependencies and scripts.

---

## 📌 Common Dependencies

```json
express
mongoose
cors
nodemon
```

---

# ⚛️ Frontend Section

# 📂 Frontend Folder Structure

```bash
frontend
│
├── public
├── src
├── package.json
├── vite.config.js
└── package-lock.json
```

---

# 📂 src Folder

Contains all frontend source code.

---

# 📂 Components Included

```bash
Header.jsx
Footer.jsx
Home.jsx
AddUser.jsx
UsersList.jsx
User.jsx
RootLayout.jsx
```

---

# 📄 Header.jsx

# 🧭 Navigation/Header Component

Displays the top navigation section of the application.

---

## 📌 Features

✅ Application Branding  
✅ Navigation UI  
✅ Reusable Layout Component  

---

# 📄 Footer.jsx

# 📌 Footer Component

Displays footer information across the application.

---

## 📌 Features

✅ Footer UI  
✅ Reusable Layout  

---

# 📄 Home.jsx

# 🏠 Homepage Component

Acts as the main landing page of the application.

---

## 📌 Features

✅ Main UI Rendering  
✅ Navigation Integration  
✅ Component Rendering  

---

# 📄 AddUser.jsx

# ➕ Add User Component

Handles user form submission.

---

## 📌 Features

✅ User Form  
✅ Input Handling  
✅ Form Submission  
✅ API Requests  

---

## 🔄 Workflow

```text
User Input
      ↓
Form Submission
      ↓
POST API Request
      ↓
Backend Receives Data
      ↓
Database Stores User
```

---

# 📄 UsersList.jsx

# 📋 User List Component

Displays all users dynamically.

---

## 📌 Features

✅ Dynamic Rendering  
✅ Display User Data  
✅ API Data Handling  

---

# 📄 User.jsx

# 👤 Single User Component

Displays individual user details.

---

## 📌 Features

✅ User Information  
✅ Reusable User Card  

---

# 📄 RootLayout.jsx

# 🧱 Main Layout Structure

Defines the overall application layout.

---

## 📌 Features

✅ Shared Layout  
✅ Header & Footer Integration  
✅ Nested Components  

---

# ⚛️ React Concepts Used

# ✅ Components

Reusable UI blocks.

---

# ✅ Props

Used for passing data between components.

---

# ✅ State Management

Used for dynamic UI updates.

---

# ✅ Event Handling

Used for form submission and interactions.

---

# ✅ Dynamic Rendering

UI updates automatically when data changes.

---

# 🔄 Full Stack Architecture

```text
React Frontend
        ↓
Axios / Fetch API
        ↓
Express Backend
        ↓
MongoDB Database
        ↓
API Response
        ↓
Frontend UI Update
```

---

# 🧠 Core Concepts Learned

# ✅ Frontend Skills

- React Components
- Props & State
- Forms
- Dynamic Rendering

---

# ✅ Backend Skills

- Express APIs
- Routing
- Middleware
- MongoDB Integration

---

# ✅ Full Stack Skills

- Frontend + Backend Communication
- API Integration
- Data Flow
- Database Interaction

---

# ▶️ How to Run the Backend

# 📥 Install Dependencies

```bash
npm install
```

---

# ▶️ Start Backend Server

```bash
npm run dev
```

OR

```bash
node server.js
```

---

# ▶️ How to Run the Frontend

# 📥 Install Dependencies

```bash
npm install
```

---

# ▶️ Start React Development Server

```bash
npm run dev
```

---

# 🌟 Key Learning Outcomes

By completing WEEK-8, the following skills are developed:

✅ Full Stack Development  
✅ React Frontend Development  
✅ Express Backend Development  
✅ MongoDB Database Integration  
✅ REST API Communication  
✅ Form Handling  
✅ Dynamic User Management  

---

# 🚀 Future Improvements

This project can be improved by adding:

- Authentication
- JWT Tokens
- User Login System
- Protected Routes
- Error Handling
- Form Validation
- Deployment
- Responsive Design

---

# 🏁 Final Summary

This folder represents the transition from:

```text
Frontend Development
          ↓
Backend APIs
          ↓
Database Integration
          ↓
Full Stack Applications
```

It provides a strong foundation for building modern MERN stack applications.

---
