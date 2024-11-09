import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  });
  return <div>TaskList</div>;
};

export default TaskList;
