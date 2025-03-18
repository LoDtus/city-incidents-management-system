import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        language: 'vi',
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            if (typeof window !== "undefined") {
                localStorage.setItem("language", action.payload);
            }
        },
    }
});
export default settingSlice; 