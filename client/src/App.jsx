import "./App.css";
import Header from "./components/header/Header";
import Signin from "./components/registration/SignIn";
import Signup from "./components/registration/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";

import "./styles/main.scss";
import TaskManager from "./pages/taskManagment/TaskManager";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/taskmanager" element={<TaskManager />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
