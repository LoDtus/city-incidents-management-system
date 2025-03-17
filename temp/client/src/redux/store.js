import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import settingSlice from './slices/settingSlice';
import userSlice from './slices/userSlice';

const appReducer = combineReducers({
    setting: settingSlice.reducer,
    user: userSlice.reducer,
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