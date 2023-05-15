import { styled } from "styled-components";

export const Input = styled.input`
	width: 314px;
	height: 51px;
	padding: 16px 20px;
	background: #333333;
	border-radius: 4px;
	color: white;
	font-size: 16px;
	transition: 0.2s;

	&:focus {
		border: 1px solid #a91013;
	}
`;
