import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: 1,
      name: "project 1",
      target: 250,
      score: 100,
      prevScore: 80,
    },
    {
      id: 2,
      name: "project 2",
      target: 220,
      score: 0,
      prevScore: 0,
    },
    {
      id: 3,
      name: "project 3",
      target: 250,
      score: 0,
      prevScore: 0,
    },
    {
      id: 4,
      name: "project 4",
      target: 270,
      score: 0,
      prevScore: 0,
    },
  ],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    updateProject: (state, action) => {
      state.projects[action.payload.id].prevScore =
        state.projects[action.payload.id].score;
      state.projects[action.payload.id].score = action.payload.scoreAdded;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProject } = projectSlice.actions;

export default projectSlice.reducer;