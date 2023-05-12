import React from "react";
import "./styles.css";
import { Container } from "../../../styles/Container/Container";
import { BiPlus } from "react-icons/bi";

const ListButton = ({ children }) => {
	return (
		<Container gap="20px" className="list-btn">
			<BiPlus style={{fontSize: "1.2em"}}/>
			{children}
		</Container>
	);
};

export default ListButton;
