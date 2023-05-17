import React from "react";
import "./styles.css";
import bgLogin from "../../assets/bg-netflix_login.svg";
import { Container } from "../../styles/Container/Container";
import { LoginButton } from "../../styles/LoginButton/LoginButton";
import { AiFillFacebook } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const FormComponent = ({ children, registered, btnFunction }) => {
	return (
		<Container
			backgroundImage={bgLogin}
			height="100vh"
			width="100%"
			className="form-wrapper"
		>
			<Container
				height="90vh"
				width="450px"
				className="form-container"
				dir="column"
				align="left"
				gap="30px"
			>
				<div className="title-form">
					<h1>{registered ? "Cadastro" : "Entrar"}</h1>
				</div>
				<form
					onChange={(e) => e.preventDefault()}
					className="form"
				>
					{children}
					<LoginButton onClick={btnFunction} type="submit">
						{registered ? "Registrar" : "Entrar"}
					</LoginButton>
					<Container
						className="forgot-password"
						justify="space-between"
						width="100%"
					>
						<Container gap="10px">
							<input type="checkbox" />
							<span>Lembre-se de mim</span>
						</Container>
						<a href="#" style={{ color: "white" }}>
							Precisa de ajuda ?
						</a>
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
					{registered ? (
						<Container gap="10px" justify="left">
							<h4 style={{ fontSize: "15px" }}>
								Já tem uma conta ?
							</h4>
							<NavLink
								to={"/login"}
								style={{ color: "white" }}
							>
								Entre
							</NavLink>
						</Container>
					) : (
						<Container gap="10px" justify="left">
							<h4 style={{ fontSize: "15px" }}>
								Novo por aqui ?
							</h4>
							<NavLink
								to={"/register"}
								style={{ color: "white" }}
							>
								Assine agora
							</NavLink>
						</Container>
					)}
					<p style={{ lineHeight: "25px" }}>
						Esta página é protegida pelo Google reCAPTCHA para
						garantir que você não é um robô.{" "}
						<span style={{ color: "#11508A" }}>Saiba mais</span>
					</p>
				</Container>
			</Container>
		</Container>
	);
};

export default FormComponent;
