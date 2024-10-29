const Signin = () => {
  return (
    <div className="signup-form">
      <div className="signup-form__wrapper">
        <form className="form">
          <h4>Sign In</h4>

          <div className="form-group">
            <input type="email" name="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
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
