import { postApi } from "../features/post-service";
import PostItem from "./post-item";

const PostContainer = () => {
	const { data: posts, isLoading } = postApi.useGetPostsQuery(5);
	const [addPost] = postApi.useAddPostMutation();

	const handleAddPost = async () => {
		const title = prompt() || "Default name";
		await addPost({ title, body: title, });
	}

	return (
		<div>
			<button onClick={handleAddPost}>Add New Post</button>
			<div className="main__container">
				{
					isLoading && (<p>Loading...</p>)
				}

				{
					posts && posts.map((post, key) => (<PostItem key={key} post={post} />))
				}
			</div>
		</div >
	);

};

export default PostContainer;