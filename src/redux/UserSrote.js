import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goit-phonebook-api.herokuapp.com',
  }),
  tagTypes: ['Auth'],
  endpoints: build => ({
    //   fetchauth: build.query({
    //     query: () => `/users/signup`,
    //     providesTags: ['Auth'],
    //   }),
    // deleteauth: build.mutation({
    //   query: contactId => ({
    //     url: `/auth/${contactId}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Auth'],
    // }),
    createAuth: build.mutation({
      query: newAuth => ({
        url: '/users/signup',
        method: 'POST',
        body: newAuth,
        headers: {
          'Content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useCreateAuthMutation } = authApi;
