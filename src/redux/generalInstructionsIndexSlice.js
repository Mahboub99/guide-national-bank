import { createSlice } from "@reduxjs/toolkit";

export const generalInstructionsIndexSlice = createSlice({
    name: "generalInstructionsIndex",
    initialState: {
        value: 0,
    },
    reducers: {
        setGeneralInstructionsIndexSlice: (state, action) => {
            state.value = action.payload;
        }
        
    }
});

export const { setGeneralInstructionsIndexSlice } = generalInstructionsIndexSlice.actions;

export default generalInstructionsIndexSlice.reducer;