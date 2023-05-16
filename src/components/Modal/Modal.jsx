import React from "react";
import "./styles.css";
import { Container } from "../../styles/Container/Container";

const Modal = ({ children}) => {
	return (
		<Container className="modal-container">{children}</Container>
	);
};

export default Modal;
