import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface GitState {

// }

const initialState = {
    data: [],
    sort: "",
}

export const gitSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        get: (state, action: PayloadAction) => {

        }
    }
});

export const { get } = gitSlice.actions;
export default gitSlice.reducer;