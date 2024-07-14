import { postApi } from "../features/post-service";

const PostItem = ({ post }) => {
	const [updatePost] = postApi.useUpdatePostMutation();

	const handleUpdate = async (post) => {
		const title = prompt() || "Default title";
		await updatePost({ title, id: post.id });
	}
	return (
		<div>
			<div className="post__item">
				{
					<div className="post__container"
						style={{ minWidth: "300px", maxHeight: "100px", border: "2px solid grey" }}
						onClick={() => handleUpdate(post)}>
						<h3>{post.title}</h3>
						<p>{post.views}</p>
					</div>
				}
			</div>
		</div >
	);

};

export default PostItem;