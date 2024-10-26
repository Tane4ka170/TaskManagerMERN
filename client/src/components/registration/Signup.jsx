import "./registration.scss";

const Signup = () => {
  return (
    <div>
      <div className="signup-form">
        <div className="signup-form__wrapper">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Enter Name" />
              <input
                type="email"
                name="Enter Name"
                id=""
                placeholder="Enter Email"
              />
              <input
                type="password"
                name="Enter Password"
                id=""
                placeholder="Enter Password"
              />
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
