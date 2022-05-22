import React from "react";
import Connexion from "../components/Connexion";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const ConnexionPage = () => {
	return (
		<div className="contener">
      <Logo />
			<Navigation />
			<Connexion />
		</div>
	);
};

export default ConnexionPage;
