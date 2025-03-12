import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'chat',
    initialState: {
        openChatInfor: false,
    },
    reducers: {
        setOpenChatInfor: (state, action) => {
            state.openChatInfor = action.payload;
        }
    }
});