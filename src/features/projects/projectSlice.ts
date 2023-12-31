import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  projects: {
    id: number;
    name: string;
    target: number;
    score: number;
    prevScore: number;
    monthlyScores: {
      month: string;
      target: number;
      covered: number;
    }[]
  }[];
  addModal: {
    active: boolean;
    projectId: number;
  };
}

interface updateProjectAction {
  id: number;
  scoreAdded: number;
}

const initialState: InitialState = {
  // list of projects
  projects: [
    {
      id: 1,
      name: "project 1",
      target: 250,
      score: 100,
      prevScore: 80,
      monthlyScores: [
        {
          month: "Jan",
          target: 250,
          covered: 220,
        },
        {
          month: "Feb",
          target: 225,
          covered: 130,
        },
        {
          month: "Mar",
          target: 250,
          covered: 145,
        },
        {
          month: "Apr",
          target: 270,
          covered: 140,
        },
      ],
    },
    {
      id: 2,
      name: "project 2",
      target: 220,
      score: 0,
      prevScore: 0,
      monthlyScores: [
        {
          month: "Jan",
          target: 250,
          covered: 100,
        },
        {
          month: "Feb",
          target: 250,
          covered: 120,
        },
        {
          month: "Mar",
          target: 200,
          covered: 180,
        },
        {
          month: "Apr",
          target: 220,
          covered: 180,
        },
      ],
    },
    {
      id: 3,
      name: "project 3",
      target: 250,
      score: 0,
      prevScore: 0,
      monthlyScores: [
        {
          month: "Jan",
          target: 250,
          covered: 200,
        },
        {
          month: "Feb",
          target: 250,
          covered: 160,
        },
        {
          month: "Mar",
          target: 220,
          covered: 120,
        },
        {
          month: "Apr",
          target: 200,
          covered: 160,
        },
      ],
    },
    {
      id: 4,
      name: "project 4",
      target: 270,
      score: 0,
      prevScore: 0,
      monthlyScores: [
        {
          month: "Jan",
          target: 250,
          covered: 100,
        },
        {
          month: "Feb",
          target: 250,
          covered: 100,
        },
        {
          month: "Mar",
          target: 250,
          covered: 100,
        },
        {
          month: "Apr",
          target: 250,
          covered: 100,
        },
      ],
    },
  ],
  // add progress modal
  addModal: {
    active: false,
    projectId: 0,
  },
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // update a project's score
    updateProject: (state, action: PayloadAction<updateProjectAction>) => {
      state.projects[action.payload.id-1].prevScore =
        state.projects[action.payload.id-1].score;
      state.projects[action.payload.id-1].score += action.payload.scoreAdded;
    },
    //activate the add progress modal
    activateModal: (state, action: PayloadAction<number>) => {
      (state.addModal.active = true),
        (state.addModal.projectId = action.payload);
    },
    //close the add progress modal
    inactivateModal: (state) => {
      state.addModal.active = false;
      state.addModal.projectId = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProject, activateModal, inactivateModal } =
  projectSlice.actions;

export default projectSlice.reducer;
