import React from "react";
import "./styles.css";
import { Container } from "../../styles/Container/Container";
import {
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
	return (
		<Container
			height="10vh"
			width="100%"
			justify="space-between"
			dir="column"
			className="footer"
		>
			<Container gap="20px" className="social-list">
				<AiOutlineInstagram className="icon" />
				<AiOutlineLinkedin className="icon" />
				<AiOutlineGithub className="icon" />
			</Container>
			<div className="trademark">
				Desenvolvido por Silvio César 2023.
			</div>
		</Container>
	);
};

export default Footer;
