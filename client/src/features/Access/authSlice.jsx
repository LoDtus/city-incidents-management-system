import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'auth',
    initialState: {
        openSignUp: false,
        openSignIn: false,
        username: null,
        password: null,
        token: null,
        rememberMe: false,
        signinAt: null,
    },
    reducers: {
        setOpenSignUp: (state, action) => {
            state.openSignUp = action.payload;
        },
        setOpenSignIn: (state, action) => {
            state.openSignIn = action.payload;
        },
        setAuth: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.token = action.payload.token;
            state.rememberMe = action.payload.rememberMe;
            state.signinAt = action.payload.signinAt;
        },
    }
});