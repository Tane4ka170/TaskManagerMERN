import "./App.css";
import Header from "./components/header/Header";
import Signin from "./components/registration/SignIn";
import Signup from "./components/registration/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/main.scss";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
