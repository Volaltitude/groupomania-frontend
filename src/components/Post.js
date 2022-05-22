import axios from "axios";
import React, { useEffect, useState } from "react";

const Post = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3000/api/post", {
				headers: {
					authorization: "Bearer " + localStorage.getItem("token"),
				},
			})
			.then((res) => setPosts(res.data));
	}, []);

	const deletePost = async (postId, e) => {
		e.preventDefault();
		try {
			axios.delete(`http://localhost:3000/api/post/${postId}`, {
				data: { id: 1 },
				headers: {
					authorization: "Bearer " + localStorage.getItem("token"),
				},
			});
      setPosts(posts.filter((item) => item !== postId));
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="postContainer">
			<h1>Posts les plus récents</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						{post.body} écrit le {post.date}{" "}
						<button onClick={(e) => deletePost(post.id, e)}>
							Supprimer
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Post;
