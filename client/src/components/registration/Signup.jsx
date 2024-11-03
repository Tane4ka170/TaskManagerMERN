import { useState } from "react";
import { useDispatch } from "react-redux";
import "./registration.scss";
import "../../styles/components/_button.scss";
import { register } from "../../redux/authSlice";

const Signup = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      register({
        username: state.username,
        password: state.password,
      })
    );
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signup-form">
      <div className="signup-form__wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h4>Sign up</h4>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Name"
              name="username"
              value={state.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="button">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
