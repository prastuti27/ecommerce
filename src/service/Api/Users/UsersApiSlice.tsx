import { Users } from "../../../types/Users";
import ecomApi from "../ecomApi";

export const userApiSlice = ecomApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<Users[], void>({
      query: () => "users",
    }),

    getUserById: builder.query<Users, number>({
      query: (id) => `users/${id}`,
    }),

    getUsersByIds: builder.query<Users[], number[]>({
      query: (ids) => `users?ids=${ids.join(",")}`,
    }),
    addUser: builder.mutation<Users, Partial<Users>>({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
    }),

    editUser: builder.mutation<Users, { id: number; user: Partial<Users> }>({
      query: ({ id, user }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: user,
      }),
    }),

    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetUsersByIdsQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = userApiSlice;
