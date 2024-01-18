import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
  username: undefined,
  token: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { username, accessToken } = action.payload;
      state.username = username;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.username = undefined;
      state.token = undefined;
    }
  }
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.username;
export const selectCurrentToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;