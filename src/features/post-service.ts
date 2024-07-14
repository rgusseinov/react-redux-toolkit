import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
	reducerPath: 'postApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: (limit) => ({
				url: `/posts`,
				params: {
					_limit: limit
				}
			})
		}),
		addPost: builder.mutation({
			query: (body) => ({
				url: `posts`,
				method: 'POST',
				body,
			}),
		}),
		updatePost: builder.mutation({
			query: (post) => ({
				url: `posts/${post.id}`,
				method: 'PATCH',
				body: post,
			}),
		}),
	})
});