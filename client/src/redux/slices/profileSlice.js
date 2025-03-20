import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        fullName: null,
        profileImg: null,
        status: null,
    },
    reducers: {
        setProfile: (state, action) => {
            state.fullName = action.payload.fullName;
            state.profileImg = action.payload.profileImg;
            state.status = action.payload.status;
        },
    }
});
export default profileSlice; 