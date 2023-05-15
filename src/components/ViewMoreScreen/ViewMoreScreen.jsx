import React, { useContext, useState } from "react";
import "./styles.css";
import { Container } from "../../styles/Container/Container";
import { ContextProvider } from "../../context/Context";
import { Oval } from "react-loader-spinner";
import { IoIosStarOutline } from "react-icons/io";
import PlayButton from "../Buttons/PlayButton/PlayButton";
import ListButton from "../Buttons/ListButton/ListButton";

const ViewMoreScreen = () => {
	const { selectedMovie, setSelectedMovie, setIsModalOpen } =
		useContext(ContextProvider);

	const [notesStyles, setNotesStyles] = useState({
		color:
			selectedMovie[0].vote_average <= 5 ? "#c22222" : "#71da40",
	});

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<Container className="view-more_screen_container">
			<Container
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					ease: "linear",
					duration: 0.3,
				}}
				justify="space-between"
				align="space-around"
				className="view-more_screen"
			>
				<Container
					className="view-more_header"
					width="100%"
					justify="right"
				>
					<p
						style={{ cursor: "pointer", fontSize: "1.1em" }}
						onClick={handleCloseModal}
					>
						X
					</p>
				</Container>
				{selectedMovie[0].poster_path ? (
					<img
						src={`https://image.tmdb.org/t/p/original${selectedMovie[0].poster_path}`}
						alt="Imagem do filme selecionado."
						className="view-image_movie"
					/>
				) : (
					<span>Imagem não disponivel</span>
				)}

				<Container
					dir="column"
					align="left"
					gap="30px"
					className="view-details_movie"
				>
					<div className="view-title_movie">
						<h1>
							{selectedMovie[0].title
								? selectedMovie[0].title
								: selectedMovie[0].name}
						</h1>
					</div>
					{selectedMovie[0].overview ? (
						<p className="synopse">
							{selectedMovie[0].overview}
						</p>
					) : (
						<p>
							Lorem ipsum dolor, sit amet consectetur
							adipisicing elit. Dignissimos, praesentium sequi
							iste aliquam, est rem vitae aspernatur eligendi,
							odit doloremque accusamus molestiae at ex
							veritatis facere quia voluptate corporis
							voluptatibus! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Vero quam quo, iure
							nemo eligendi laudantium aliquam necessitatibus
							sunt a assumenda, voluptate nostrum ut pariatur
							ipsam repudiandae odio aut debitis ad?
						</p>
					)}
					<Container
						justify="left"
						className="view-classification"
						gap="10px"
					>
						<IoIosStarOutline style={{ fontSize: "1.5em" }} />
						<h2>Nota</h2>
						<h2 style={notesStyles} className="view-note">
							{selectedMovie[0].vote_average.toFixed(1)}
						</h2>
					</Container>
					<Container justify="left" gap="20px">
						<PlayButton>Assistir</PlayButton>
						<ListButton>Adicionar a lista</ListButton>
					</Container>
				</Container>
			</Container>
		</Container>
	);
};

export default ViewMoreScreen;
