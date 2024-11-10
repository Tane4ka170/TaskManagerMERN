import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../redux/taskSlice";
import ListCard from "./ListCard";

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
      {Object.values(AllTasks).map((item) => {
        return <ListCard />;
      })}
    </div>
  );
};

export default TaskList;
