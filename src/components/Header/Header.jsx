import React, { useContext, useState } from "react";
import { Container } from "../../styles/Container/Container";
import "./styles.css";
import Logo from "../../assets/NetflixLogoSvg.svg";
import userIcon from "../../assets/user_icons/ProfileCard.svg";
import { HiOutlineBell } from "react-icons/hi";
import Popup from "../Popup/Popup";
import { ContextProvider } from "../../context/Context";

import { NavLink } from "react-router-dom";

const Header = () => {
	const { isLogged } = useContext(ContextProvider);

	const [openPopup, setOpenPopup] = useState(false);

	const handleOpenPopup = () => {
		setOpenPopup(!openPopup);
	};

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
			{isLogged ? (
				<>
					<Container
						gap="30px"
						justify="space-between"
						className="icon-user_logged_container"
					>
						<HiOutlineBell className="icon" />
						<img
							onClick={handleOpenPopup}
							src={userIcon}
							alt="Icone do usuário logado"
						/>
						{openPopup && <Popup />}
					</Container>
				</>
			) : (
				<NavLink style={{ color: "white" }} to="/login">
					Faça login
				</NavLink>
			)}
		</Container>
	);
};

export default Header;
