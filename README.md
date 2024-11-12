# TaskManagerMERN 📋💻

TaskManagerMERN is a web application for task management built using the MERN stack (MongoDB, Express, React, Node.js).

## 📑 Overview

This application allows users to:

- Register and log in 🔐
- Manage their task list (add, edit, delete) ✅
- Receive personalized task information 📝

## 🛠️ Technologies

- **Frontend** : React, Redux, React Router, Vite, SCSS
- **Backend** : Node.js, Express, MongoDB, Mongoose
- **Server Libraries** : CORS, Morgan, JSON Web Token (JWT)

## 📂 Project Structure

- `client/` - User Interface (React)
- `server/` - Backend API for request handling (Node.js + Express)
- `database/` - MongoDB configuration with Mongoose

## 🚀 Getting Started

1. **Clone the repository** :

   ```
   git clone https://github.com/Tane4ka170/TaskManagerMERN.git
   ```

2. **Install dependencies** :

   ```
   yarn install
   ```

3. **Run the project** :

```
yarn dev
```

This will start both the client and server.

## 🔗 API

The server is available at `http://localhost:8235` with the following main routes:

- `/auth` - authentication
- `/task` - task management
