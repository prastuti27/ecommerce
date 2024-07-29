import ecomApi from "../ecomApi";
export const apiSlice = ecomApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = apiSlice;
