import { setAuth } from "@/lib/utils/apiUtils";
import { createSlice } from "@reduxjs/toolkit";

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

                // res.cookie('token', 'jwt_token', {
                //     httpOnly: true,
                //     secure: process.env.NODE_ENV === 'production', // Chỉ gửi cookie qua HTTPS trong môi trường production
                //     sameSite: 'Strict', // Bảo vệ khỏi CSRF
                //     maxAge: 3600000 // Cookie hết hạn sau 1 giờ
                // });
            } else if (!action.payload.rememberMe && typeof window !== 'undefined') {
                sessionStorage.setItem("auth", JSON.stringify(data));
                sessionStorage.setItem("role", action.payload.role);
            }
        },
    }
});
export default userSlice; 