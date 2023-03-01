import { createSlice } from "@reduxjs/toolkit";

export const groupNameSlice = createSlice({
    name: "groupName",
    initialState: {
        value: 'groupName',
    },
    reducers: {
        setGroupName: (state, action) => {
            state.value = action.payload;
        }
        
    }
});

export const { setGroupName } = groupNameSlice.actions;

export default groupNameSlice.reducer;