import axios from "axios";
import React, { useEffect } from "react";

const Post = ({ posts, setPosts }) => {
	useEffect(() => {
		axios
			.get("http://localhost:3000/api/post", {
				headers: {
					authorization: "Bearer " + localStorage.getItem("token"),
				},
			})
			.then((res) => setPosts(res.data));
	}, [posts, setPosts]);

	const deletePost = async (postId, e) => {
		e.preventDefault();
		try {
			await axios.delete(`http://localhost:3000/api/post/${postId}`, {
				data: { id: 1 },
				headers: {
					authorization: "Bearer " + localStorage.getItem("token"),
				},
			});
			const newPosts = posts.filter((item) => item.id !== postId);
			setPosts(newPosts);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="postsContainer">
			<h1>Posts les plus récents</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<div className="postContainer">
							{post.body} écrit le {post.date}{" "}
							<button onClick={(e) => deletePost(post.id, e)}>
								Supprimer
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Post;
