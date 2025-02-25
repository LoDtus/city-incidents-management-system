import { createSelector } from '@reduxjs/toolkit';

export const getNavBarWidth = (state) => state.navBar.width;
export const getUserAuth = (state) => state.userAuth;
export const getOpenChatInfor = (state) => state.chat.openChatInfor;