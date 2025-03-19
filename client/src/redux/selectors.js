import { createSelector } from '@reduxjs/toolkit';

export const getProps = (state) => state.properties;
export const getSetting = (state) => state.setting;
export const getUser = (state) => state.user;
export const getProfile = (state) => state.profile;