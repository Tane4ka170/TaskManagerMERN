import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./home.scss";

const Home = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div className="home">
      <div className="home__container">
        <h2>Keep everything organized</h2>
        <p>With TaskManager</p>
        {currentUser && currentUser.token ? (
          <Link to="/dashboard" className="button">
            Begin now
          </Link>
        ) : (
          <Link to="/signin" className="button">
            Begin now
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
