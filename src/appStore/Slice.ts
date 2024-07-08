import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface GitState {

// }

// const initialState: GitState = {

// }


export const gitSlice = createSlice({
    name: "okname",
    initialState : [],
    reducers: {
        fn: (state, action: PayloadAction) => {

        }
    }
});

export default gitSlice.reducer;
export const { fn } = gitSlice.actions;