import React from "react";
import { Container } from "../../styles/Container/Container";
import { BiPlay } from "react-icons/bi";

const PlayButton = ({ children }) => {
	return (
		<Container
			style={{
				padding: "15px 30px",
				borderRadius: "4px",
				fontSize: "1.4em",
				cursor: "pointer",
			}}
			justify="space-between"
			backgroundColor="#fff"
			color="black"
			gap="10px"
		>
			<BiPlay />
			<p>{children}</p>
		</Container>
	);
};

export default PlayButton;
