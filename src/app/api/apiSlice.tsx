import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from '../../features/auth/authSlice';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000', // backend url
  credentials: 'include', // include the cookie in each request
  prepareHeaders: (headers: Headers, { getState }: Pick<BaseQueryApi, "getState">) => {
    // send the token with each request
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

// If the access token is expired, send a refresh token request to get a new access token
const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
  let result = await baseQuery(args, api, extraOptions);
  const { getState, dispatch } = api;

  if (result?.error?.status === 403) {
    console.log('Sending refresh token');
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log(refreshResult);

    if (refreshResult?.data) {
      const username = (getState() as RootState).auth.username;
      // store the new token
      dispatch(setCredentials({ ...refreshResult.data, username }));
      // retry the original query with the new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [ 'User' ],
  endpoints: () => ({})
});
