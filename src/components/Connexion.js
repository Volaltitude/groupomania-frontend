import axios from "axios";
import React, { useState } from "react";

const Connexion = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:3000/api/auth/login", {
				email,
				password,
			});
			localStorage.setItem("token", res.data.token);
      window.location = "/home";

		} catch (err) {
			if (err.response.status === 401) console.log(err.response.data.error)
      else console.log(err)
		}
	};

	return (
		<div className="connexionContainer">
			<h1>Connexion</h1>
			<br />
			<form onSubmit={handleSubmit}>
				<ul>
					<li>
						<label>
							Email :{" "}
							<input
								type="text"
								name="email"
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
					</li>
					<li>
						<label>
							Mot de Passe :{" "}
							<input
								type="text"
								name="password"
								placeholder="Mot de Passe"
                onChange={(e) => setPassword(e.target.value)}
							/>
						</label>
					</li>
				</ul>
				<input type="submit" value="Log in" />
			</form>
		</div>
	);
};

export default Connexion;
