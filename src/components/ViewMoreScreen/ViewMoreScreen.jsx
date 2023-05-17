import React, {
	useContext,
	useState,
	useMemo,
	useCallback,
} from "react";
import "./styles.css";
import { Container } from "../../styles/Container/Container";
import { ContextProvider } from "../../context/Context";
import { Oval } from "react-loader-spinner";
import { IoIosStarOutline } from "react-icons/io";
import PlayButton from "../Buttons/PlayButton/PlayButton";
import ListButton from "../Buttons/ListButton/ListButton";
import Modal from "../Modal/Modal";

const ViewMoreScreen = () => {
	const { selectedMovie, setSelectedMovie, setIsModalOpen } =
		useContext(ContextProvider);

	const handleCloseModal = useCallback(() => {
		setIsModalOpen(false);
	}, [setIsModalOpen]);

	const notesStyles = useMemo(
		() => ({
			color:
				selectedMovie[0].vote_average <= 5
					? "#c22222"
					: "#71da40",
		}),
		[selectedMovie]
	);

	return (
		<Modal>
			<Container
				initial={{ y: 100, scale: 0, opacity: 0 }}
				animate={{ y: 0, scale: 1, opacity: 1 }}
				transition={{
					ease: "linear",
					duration: 0.2,
				}}
				justify="space-between"
				className="view-more_content"
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
					justify="space-around"
					height="100%"
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
							{selectedMovie[0].overview.length > 230
								? `${selectedMovie[0].overview.slice(
										selectedMovie[0],
										230
								  )}...`
								: selectedMovie[0].overview}
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
					<Container
						className="view-details_buttons"
						justify="left"
						gap="20px"
					>
						<PlayButton>Assistir</PlayButton>
						<ListButton>Adicionar a lista</ListButton>
					</Container>
				</Container>
			</Container>
		</Modal>
	);
};

export default ViewMoreScreen;
