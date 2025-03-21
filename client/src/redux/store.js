import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import settingSlice from './slices/settingSlice';
import userSlice from './slices/userSlice';
import propertiesSlice from './slices/propertiesSlice';
import editorSlice from './slices/editorSlice';
import guidelineSlice from './slices/guidelineSlice';

const appReducer = combineReducers({
    properties: propertiesSlice.reducer,
    setting: settingSlice.reducer,
    user: userSlice.reducer,
    profile: propertiesSlice.reducer,
    editor: editorSlice.reducer,
    guideline: guidelineSlice.reducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return appReducer(state, action);
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;