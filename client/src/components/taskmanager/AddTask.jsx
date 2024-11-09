import { useState } from "react";
import "./addtask.scss";

const AddTask = () => {
  const [state, setState] = useState({
    task: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {};
  return (
    <div>
      <div className="addtask">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Add your task now"
            onChange={handleChange}
            value={state.task}
          />
          <button className="button">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
