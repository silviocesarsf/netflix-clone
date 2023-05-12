import React from "react";
import { Container } from "../../../styles/Container/Container";
import { BiPlay } from "react-icons/bi";
import "./styles.css";

const PlayButton = ({ children }) => {
	return (
		<Container
			justify="space-between"
			backgroundColor="#fff"
			color="black"
			gap="10px"
			className="play-btn"
		>
			<BiPlay />
			<p>{children}</p>
		</Container>
	);
};

export default PlayButton;
