import { configureStore } from '@reduxjs/toolkit';
import navigationBarSlice from '../features/NavigationBar/navigationBarSlice';
import chatSlice from '../features/Chat/chatSlice';
import userSlice from '../features/Access/userSlice';

const store = configureStore({
    reducer: {
        navBar: navigationBarSlice.reducer,
        userAuth: userSlice.reducer,
        chat: chatSlice.reducer,
    },
});

export default store;