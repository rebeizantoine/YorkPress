import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  text: string;
  done: boolean;
}

interface TasksState {
  tasks: Task[];
}
const initialState: TasksState = {
  tasks: [
    { text: "Complete presentation for team meeting on Friday", done: false },
    { text: "Schedule dentist appointment for next month", done: false },
    { text: "Buy groceries for the week", done: false },
    { text: "Call utility company to resolve billing issue", done: true },
    { text: 'Finish reading chapter 3 of "The Great Gatsby"', done: true },
    { text: "Go for a 30-minute run in the park", done: true },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({ text: action.payload, done: false });
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      state.tasks[action.payload].done = !state.tasks[action.payload].done;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload, 1);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
