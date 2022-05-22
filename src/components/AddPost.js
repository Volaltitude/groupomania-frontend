import axios from "axios";
import React, { useState } from "react";

const AddPost = () => {

const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
 
  try {
    await axios.post("http://localhost:3000/api/post", {body: message, user_id: 1}, {
      headers: {
        authorization:
          "Bearer " + localStorage.getItem("token"),
      },
    });
  }
  catch (err) {
    console.error(err)
  }
  finally {
    window.location = "/home";
  }
}
	return (
		<div className="postForm">
			<form onSubmit={handleSubmit}>
				<label htmlFor="post message">
					<input
						type="text"
						placeholder="Ecrivez votre message"
						name="post"
            onChange={(e) => setMessage(e.target.value)}
					/>
				</label>
        <input type="submit" value="publier"/>
			</form>
		</div>
	);
};

export default AddPost;
