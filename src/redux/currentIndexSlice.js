import { createSlice } from "@reduxjs/toolkit";

export const currentIndexSlice = createSlice({
    name: "currentIndex",
    initialState: {
        value: 0,
    },
    reducers: {
        setCurrentIndex: (state, action) => {
            state.value = action.payload;
        }
        
    }
});

export const { setCurrentIndex } = currentIndexSlice.actions;

export default currentIndexSlice.reducer;