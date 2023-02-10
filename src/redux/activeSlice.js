import { createSlice } from "@reduxjs/toolkit";

export const activeSlice = createSlice({
    name: "active",
    initialState: {
        value: 1,
    },
    reducers: {
        setActiveId: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setActiveId } = activeSlice.actions;

export default activeSlice.reducer;