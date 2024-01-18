import { apiSlice } from '../../app/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
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
        body: { ...credentials }
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'GET'
      })
    })
  })
});

export const { useSignupMutation, useSigninMutation, useLogoutMutation } = userApiSlice;