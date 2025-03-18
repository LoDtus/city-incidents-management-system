import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'properties',
    initialState: {
        widthNavBar: 0,
        openChatInfor: false,
    },
    reducers: {
        setWidth_navBar: (state, action) => {
            state.widthNavBar = action.payload;
        },
        setOpenChatInfor: (state, action) => {
            state.openChatInfor = action.payload;
        },
    }
});