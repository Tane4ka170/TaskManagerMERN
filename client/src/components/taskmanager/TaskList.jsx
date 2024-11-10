import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../redux/taskSlice";
import ListCard from "./ListCard";
import "./tasklist.scss";

const TaskList = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const tasks = useSelector((state) => state.task);
  const { currentUser } = auth;
  const AllTasks = tasks?.AllTasks || {};

  useEffect(() => {
    if (currentUser?.token) {
      dispatch(getAllTasks(currentUser.token));
    }
  }, [dispatch, currentUser?.token]);

  return (
    <div>
      <ul className="list-header">
        <li>
          <h5>Id</h5>
        </li>
        <li>
          <h5>Issue Name</h5>
        </li>
        <li>
          <h5>Status</h5>
        </li>
        <li>
          <h5>Action</h5>
        </li>
      </ul>
      {Object.values(AllTasks).map((item) => (
        <ListCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default TaskList;
