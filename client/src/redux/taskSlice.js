import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialTask = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : null;

const initialState = {
  TaskData: initialTask,
  AllTasks: {},
};

export const taskSlice = createSlice({
  name: "Task",
  initialState,

  reducers: {
    taskAddedSuccessfully: (state, action) => {
      state.TaskData = action.payload;
      state.AllTasks = {
        ...state.AllTasks,
        [action.payload._id]: action.payload,
      };
    },
    taskAddFailure: (state) => {
      return state;
    },
    getAllTaskSuccess: (state, action) => {
      state.AllTasks = action.payload;
    },
    getAllTasksFailure: (state) => {
      return state;
    },
    editTaskSuccess: (state, action) => {
      state.TaskData = action.payload;
    },
    deleteSuccess: (state, action) => {
      delete state.AllTasks[action.payload._id];
    },
    deleteFail: (state) => {
      return state;
    },

  },
});

export const {
  taskAddFailure,
  taskAddedSuccessfully,
  getAllTaskSuccess,
  getAllTasksFailure,
  editTaskSuccess,
  deleteFail,
  deleteSuccess,
} = taskSlice.actions;

export default taskSlice.reducer;

export const addTask = (task, id) => async (dispatch) => {
  const taskData = { task, id };
  try {
    const response = await axios.post(
      "http://localhost:8235/task/add",
      taskData
    );
    if (response) {
      localStorage.setItem("task", JSON.stringify(response.data));
      dispatch(taskAddedSuccessfully(response.data));
    }
  } catch (error) {
    dispatch(taskAddFailure());
  }
};

export const getAllTasks = (token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(
      "http://localhost:8235/task/tasks",
      config
    );
    if (response) {
      dispatch(getAllTaskSuccess(response.data));
    }
  } catch (error) {
    dispatch(getAllTasksFailure());
  }
};

export const arrowClick = (item) =>  {
  let taskData={
    id: item._id,
    status: item.status,
    string,
  }

  try {
    let response = await axios.put(
			`http://localhost:8235/task/${taskData.id}`,
			taskData
		);

    if (response) {
      window.location.reload()
    }
  } catch (error) {
    console.log(error)
  }
};
export const forwardArrowClick = (item) => async(dispatch)={};