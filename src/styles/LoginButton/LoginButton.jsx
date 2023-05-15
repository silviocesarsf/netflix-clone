import { darken } from "polished";
import { styled } from "styled-components";

export const LoginButton = styled.button`
	width: 100%;
	height: 51px;
	background: #a91013;
	border-radius: 4px;
	color: white;
	font-size: 1.2em;
	transition: 0.2s;

	&:hover {
		background-color: ${darken(0.1, "#a91013")};
	}
`;
