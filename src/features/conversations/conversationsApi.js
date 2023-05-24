import { apiSlice } from "../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (userId) => ({
        url: `/conversations?userid=${userId}`,
      }),
    }),
  }),
});

export const { useGetConversationsQuery } = conversationsApi;
