import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        preview: false,
        save: false,
        imp: false,
    },
    reducers: {
        setPreview: (state, action) => {
            state.preview = action.payload;
        },
        setSave: (state, action) => {
            state.save = action.payload;
        },
        setImport: (state, action) => {
            state.imp = action.payload;
        },
    }
});
export default editorSlice; 