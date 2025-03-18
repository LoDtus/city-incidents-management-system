import { setAuth } from "@/lib/utils/apiUtils";
import { saveUserData } from "@/lib/utils/authenticationUtils";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        email: null,
        password: null,
        role: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.role = action.payload.role;
        },
    }
});
export default userSlice; 