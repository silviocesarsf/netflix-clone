import React from "react";
import { Container } from "../../styles/Container/Container";
import "./styles.css";

const Popup = () => {
	return (
		<Container
			dir="column"
			className="popup"
			height="200px"
			width="110px"
		>
			<div className="triangle"></div>
			<ul>
				<li>Trocar de conta</li>
				<li>Trocar foto</li>
				<li>Sair</li>
			</ul>
		</Container>
	);
};

export default Popup;
