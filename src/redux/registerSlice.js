import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        value: "group",
    },
    reducers: {
        setRegister: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setRegister } = registerSlice.actions;

export default registerSlice.reducer;