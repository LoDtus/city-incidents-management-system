import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'navBar',
    initialState: {
        width: 0,
    },
    reducers: {
        setWidth_navBar: (state, action) => {
            state.width = action.payload;
        }
    }
});