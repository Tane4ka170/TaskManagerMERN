import { useState } from "react";
import "./registration.scss";
import "../../styles/components/_button.scss";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/authSlice";

const Signin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signin({
        email: state.email,
        password: state.password,
      })
    );
  };
  return (
    <div className="signup-form">
      <div className="signup-form__wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h4>Sign In</h4>

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

export default Signin;
