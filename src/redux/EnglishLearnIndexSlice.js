import { createSlice } from "@reduxjs/toolkit";

export const englishLearnIndexSlice = createSlice({
    name: "englishLearnIndex",
    initialState: {
        value: 0,
    },
    reducers: {
        setEnglishLearnIndexSlice: (state, action) => {
            state.value = action.payload;
        }
        
    }
});

export const { setEnglishLearnIndexSlice } = englishLearnIndexSlice.actions;

export default englishLearnIndexSlice.reducer;