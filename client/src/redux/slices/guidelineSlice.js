import { createSlice } from "@reduxjs/toolkit";

const guidelineSlice = createSlice({
    name: 'guideline',
    initialState: {
        id: null,
        idAuthor: null,
        title: null,
        content: null,
    },
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload;
        },
    }
});
export default guidelineSlice; 