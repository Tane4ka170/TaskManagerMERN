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
      state.TaskData = action.payload;
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
  const response = await axios.post("http://localhost:8235/task/add", taskData);

  if (response) {
    localStorage.setItem("task", JSON.stringify(response.data));

    dispatch(taskAddedSuccessfully(response.data));
    window.location.reload();
  } else {
    dispatch(taskAddFailure());
  }
};

export const getAllTasks = (token) => async(dispatch);
