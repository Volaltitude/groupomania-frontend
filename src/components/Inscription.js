import React, { useState } from "react";
import axios from "axios";

const Inscription = () => {
	const [lastname, setLastname] = useState("");
	const [firstname, setFirstname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifPassword, setVerifPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== verifPassword) return <p>Le mot de passe ne correspond pas</p>
      await axios.post("http://localhost:3000/api/auth/signup", {lastname, firstname, email, password});
    }
    catch (err) {
      console.error(err);
    }
    finally {
      window.location= "/login";
    }
  }

	return (
		<div className="inscriptionContainer">
			<h1>Inscription</h1>
			<br />
			<form onSubmit={handleSubmit}>
				<ul>
					<li>
						<label>
							Nom :{" "}
							<input
								type="text"
								name="lastname"
								placeholder="Nom"
                onChange={(e) => setLastname(e.target.value)}
							/>
						</label>
					</li>
					<li>
						<label>
							Prénom :{" "}
							<input
								type="text"
								name="firstname"
								placeholder="Prénom"
                onChange={(e) => setFirstname(e.target.value)}
							/>
						</label>
					</li>
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
					<li>
						<label>
							Confimer Mot de Passe :{" "}
							<input
								type="text"
								name="passwordConfirmation"
								placeholder="Confirmer Mot de Passe"
                onChange={(e) => setVerifPassword(e.target.value)}
							/>
						</label>
					</li>
				</ul>
				<input type="submit" value="Sign up" />
			</form>
		</div>
	);
};

export default Inscription;
