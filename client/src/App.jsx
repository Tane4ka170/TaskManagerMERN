import "./App.css";
import Header from "./components/header/Header";
import Signin from "./components/registration/SignIn";
import Signup from "./components/registration/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";

import "./styles/main.scss";
import TaskManager from "./pages/taskManagment/TaskManager";
import { Dashboard } from "./pages/dashboard/Dashboard";
import RequireAuth from "./utils/RequireAuth";
import { useSelector } from "react-redux";

function App() {
  const { auth } = useSelector((state) => ({ ...state }));
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={!auth.currentUser ? <Signin /> : <Dashboard />}
          />
          <Route
            path="/signup"
            element={!auth.currentUser ? <Signup /> : <Dashboard />}
          />
          <Route
            path="/taskmanager"
            element={
              <RequireAuth>
                <TaskManager />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
