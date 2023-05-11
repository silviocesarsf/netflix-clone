import React from "react";
import { Container } from "../../styles/Container/Container";
import "./styles.css";
import Logo from "../../assets/NetflixLogoSvg.svg";
import userIcon from "../../assets/user_icons/ProfileCard.svg";
import { HiOutlineBell } from "react-icons/hi";

const Header = () => {
	return (
		<Container
			className="header"
			width="100%"
			justify="space-between"
		>
			<div className="logo-header">
				<img src={Logo} alt="Logo netflix" />
			</div>
			<div className="navlinks">
				<ul>
					<li className="active">Início</li>
					<li>Séries</li>
					<li>Filmes</li>
					<li>Bombando</li>
					<li>Minha lista</li>
					<li>Navegar por idiomas</li>
				</ul>
			</div>
			<Container
				gap="30px"
				justify="space-between"
				className="icon-user_logged_container"
			>
				<HiOutlineBell className="icon" />
				<img src={userIcon} alt="Icone do usuário logado" />
			</Container>
		</Container>
	);
};

export default Header;
