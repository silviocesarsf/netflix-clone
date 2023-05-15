import React from "react";
import { Section } from "../../styles/Section/Section";
import "./styles.css";
import bgLogin from "../../assets/bg-netflix_login.svg";
import { Container } from "../../styles/Container/Container";
import { Input } from "../../styles/Input/Input";
import { LoginButton } from "../../styles/LoginButton/LoginButton";
import { AiFillFacebook } from "react-icons/ai";

const Login = () => {
	return (
		<Container
			backgroundImage={bgLogin}
			height="100vh"
			width="100%"
			className="login-wrapper"
		>
			<Container
				height="90vh"
				width="450px"
				className="login-container"
				dir="column"
				align="left"
				gap="30px"
			>
				<div className="title-login">
					<h1>Entrar</h1>
				</div>
				<form className="form">
					<Input
						type="email"
						placeholder="Email ou número de telefone"
					/>
					<Input type="password" placeholder="Senha" />
					<LoginButton>Entrar</LoginButton>
					<Container
						className="forgot-password"
						justify="space-between"
						width="100%"
					>
						<Container gap="10px">
							<input type="checkbox" />
							<span>Lembre-se de mim</span>
						</Container>
						<span>Precisa de ajuda ?</span>
					</Container>
				</form>
				<Container
					dir="column"
					align="left"
					gap="20px"
					className="bottom-links"
				>
					<Container gap="10px" justify="left">
						<AiFillFacebook style={{ color: "#fff" }} />
						Conectar-se com Facebook
					</Container>
					<Container gap="10px" justify="left">
						<h4 style={{ fontSize: "15px" }}>
							Novo por aqui ?
						</h4>
						<h4 style={{ color: "#fff", fontSize: "16px" }}>
							Assine agora.
						</h4>
					</Container>
					<p>
						Esta página é protegida pelo Google reCAPTCHA para
						garantir que você não é um robô.{" "}
						<span style={{ color: "#11508A" }}>Saiba mais</span>
					</p>
				</Container>
			</Container>
		</Container>
	);
};

export default Login;
