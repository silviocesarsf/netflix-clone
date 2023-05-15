import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
	display: flex;
	align-items: ${(props) => (props.align ? props.align : "center")};
	justify-content: ${(props) =>
		props.justify ? props.justify : "center"};
	flex-direction: ${(props) => props.dir};
	gap: ${(props) => props.gap};
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	padding: ${(props) => props.padding};
	background-color: ${(props) => props.backgroundColor};
	color: ${(props) => props.color};
	background-image: url(${(props) => props.backgroundImage});
	background-position: center;
	background-size: cover;
`;
