import { setAuth } from "@/lib/utils/apiUtils";
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

            setAuth(action.payload.email, action.payload.password);
            const data = {
                "email": action.payload.email,
                "password": action.payload.password
            }

            if(action.payload.rememberMe && typeof window !== 'undefined') {
                localStorage.setItem("auth", JSON.stringify(data));
                localStorage.setItem("role", action.payload.role);
                // localStorage.setItem("token", "jwt_token");
                // luu voi cookies
            } else if (!action.payload.rememberMe && typeof window !== 'undefined') {
                sessionStorage.setItem("auth", JSON.stringify(data));
                sessionStorage.setItem("role", action.payload.role);
            }
            Cookies.set('role', action.payload.role, { path: '/', expires: 60 });
        },
    }
});
export default userSlice; 