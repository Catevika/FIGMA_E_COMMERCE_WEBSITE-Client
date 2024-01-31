import { apiSlice } from '../../app/api/apiSlice';
import { User } from '../../types';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: '/signup',
        method: 'POST',
        body: data
      })
    }),
    signin: builder.mutation({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        body: { ...credentials },
      })
    }),
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: '/users',
        keepUserdata: 5,
        providesTags: (result: User[]) =>
          result
            ? [ ...result.map(({ username }) => ({ type: 'User' as const, username })), 'User' ]
            : [ 'User' ]
      })
    }),
    getUserDetails: builder.query<User, void>({
      query: (username) => ({
        url: `/users/${username}`,
        keepUserdata: 5
      })
    }),
    updateUser: builder.mutation<void, Pick<User, 'username'> & Partial<User>>({
      query: ({ username, ...data }) => ({
        url: `users/${username}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: [ 'User' ]
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'GET',
      }),
      invalidatesTags: [ 'User' ]
    })
  })
});

export const { useSignupMutation, useSigninMutation, useLogoutMutation, useGetUsersQuery, useGetUserDetailsQuery, useUpdateUserMutation } = userApiSlice;