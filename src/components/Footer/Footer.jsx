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
				<a
					href="https://www.instagram.com/silviocesarsf/"
					target="_blank"
				>
					<AiOutlineInstagram className="icon" />
				</a>
				<a href="https://www.linkedin.com/in/silviocesarsf/" target="_blank">
					<AiOutlineLinkedin className="icon" />
				</a>
				<a href="https://github.com/silviocesarsf" target="_blank">
					<AiOutlineGithub className="icon" />
				</a>
			</Container>
			<div className="trademark">
				Desenvolvido por Silvio César 2023.
			</div>
		</Container>
	);
};

export default Footer;
