import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: (limit) => ({
				url: `/users`,
				params: {
					_limit: limit
				}
			})
		})
	})
});

